require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/connectDB');
const postRoute = require('./routes/postRoute')

const port = process.env.PORT;
const url = process.env.DB_URL;
app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:true}))

// database calling
connectDB(url)

app.use('/',postRoute)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})