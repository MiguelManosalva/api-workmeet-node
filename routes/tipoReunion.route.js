const express = require("express");
const router = express.Router();

const { list, update, create, tipoReunionById } = require("../controllers/tipoReunion.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/tipoReunion:
 *  get:
 *    summary: tipoReunion
 *    description: Use to request obtain tipoReuniones
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/tipoReunion", requireSignin, isAuth, list);

/**
 * @swagger   
 * /api/tipoReunion/create: 
 *  post:
 *    summary: create tipoReunion
 *    description: Use to request create tipoReunion
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              glosa:
 *                  type: string
 *                  description: glosa tipoReunion valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion tipoReunion valida
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/tipoReunion/create", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/tipoReunion/update: 
 *  put:
 *    summary: update tipoReunion
 *    description: Use to request update tipoReunion
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              glosa:
 *                  type: string
 *                  description: glosa tipoReunion valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion tipoReunion valida      
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/tipoReunion/update/:tipoReunionId", requireSignin, isAuth, update);


// params
router.param("tipoReunionId", tipoReunionById);

module.exports = router;
