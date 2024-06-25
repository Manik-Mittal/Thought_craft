const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const app = express();
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoute')


//env config
dotenv.config()

//mongo connect 
connectDb();
//*********************** */
const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(morgan('dev'))

//********************************************* */
//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)


const PORT = process.env.PORT || 8080
//routes

app.get('/', (req, res) => {
    res.status(200).send({
        "message": "node server"

    })
})



app.listen(8080, () => {
    console.log(`server is running on port ${PORT}`);
})