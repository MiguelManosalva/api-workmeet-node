// generic imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const tareaRoutes = require("./routes/tarea.route");
const notificacionRoutes = require("./routes/notificacion.route");
const equipoRoutes = require("./routes/equipo.route");
const reunionRoutes = require("./routes/reunion.route");
const tipoReunionRoutes = require("./routes/tipoReunion.route");

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
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error', error);
    }
}

// BD
db();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// SWAGGER
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Teameet API",
            description: "Teameet API Information",
            contact: {
                name: "miguel_manosalva_iraira"
            },
            servers: ["http://localhost:8001"],
            version: "1.0.0"
        }
    },
    // definition the apis with swagger 
    apis: ['./routes/*.js']
};

// final definitions with swagger-express
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/* ROTUES */
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", tareaRoutes);
app.use("/api", notificacionRoutes);
app.use("/api", equipoRoutes);
app.use("/api", reunionRoutes);
app.use("/api", tipoReunionRoutes);



// PORT
const port = process.env.PORT || 4300;

// LISTEN PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

