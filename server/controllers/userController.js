const userModel = require("../model/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: 'all users data',
            users
        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: 'error in all users getting',
            error
        })

    }
};

//create user
exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(500).send({
                message: 'please fill all fields',
                success: false
            })
        }
        const existinguser = await userModel.findOne({ email });
        if (existinguser) {
            return res.status(401).send({
                message: 'user already exists',
                success: false
            })
        }
        const user = new userModel({ username, email, password });
        await user.save();
        return res.status(200).send({
            message: 'user created',
            success: true,
            user

        })

    }
    catch (error) {
        console.log(error);
        return res.status(405).send({
            sucess: false,
            message: 'error in callback only'
        })

    }

}
//login
exports.loginController = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(401).send({
                success: false,
                message: "provide all the fields"
            })
        }
        const user = await userModel.findOne({ username })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "user not found"
            })
        }
        if (user.password != password) {
            return res.status(500).send({
                success: false,
                message: "password incorrect"
            })
        }
        return res.status(200).send({
            success: true,
            message: "successful login",
            user

        })

    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "error in call back",
            error
        })
    }
}