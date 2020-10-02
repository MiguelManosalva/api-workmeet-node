// generic imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

// EXPRESS
const app = express();

// CONEXION
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.success('DB Connected');
    } catch (error) {
        console.error('DB Connection Error', error);
    }
}

// BD
db();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// PORT
const port = process.env.PORT || 4300;

// LISTEN PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

