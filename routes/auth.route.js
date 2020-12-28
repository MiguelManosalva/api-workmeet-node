const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout
} = require("../controllers/auth.controller");
const { userSignupValidator } = require("../validators");

// routes
/**
 * @swagger   
 * /api/signup: 
 *  post:
 *    summary: signup user
 *    description: Use to request signup user
 *    tags:
 *      - Auth
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              nombre:
 *                  type: string
 *                  description: nombre user valid
 *              apellidos:
 *                  type: string
 *                  description: apellidos user valid
 *              email:
 *                  type: string
 *                  description: email user valid
 *              hashed_password:
 *                  type: string
 *                  description: password user valid
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/signup", userSignupValidator, signup);

/**
 * @swagger   
 * /api/signin: 
 *  post:
 *    tags:
 *      - Auth
 *    summary: signin user
 *    description: Use to request signin user
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              email:
 *                  type: string
 *                  description: email user valid
 *              hashed_password:
 *                  type: string
 *                  description: password user valid
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/signin", signin);

/**
 * @swagger
 * /api/signout:
 *  get:
 *    tags:
 *      - Auth
 *    summary: signout user
 *    description: Use to request logout user
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/signout", signout);

module.exports = router;