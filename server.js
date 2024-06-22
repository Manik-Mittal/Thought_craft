const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const app = express();


//env config
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.status(200).send({
        "message": "node server"

    })
})


app.listen(8080, () => {
    console.log(`server is running on port ${PORT}`);
})