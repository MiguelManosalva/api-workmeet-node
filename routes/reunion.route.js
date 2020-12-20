const express = require("express");
const router = express.Router();

const { list, update, create, reunionById, read } = require("../controllers/reunion.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/reunion:
 *  get:
 *    summary: reunion
 *    description: Use to request obtain reuniones
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/reunion", requireSignin, isAuth, list);

/**
 * @swagger
 * /api/reunion/{reunionId}:
 *  get:
 *    summary: reunion
 *    description: Use to request obtain reunion
 *    parameters:
 *      - reunionId: id
 *        in: path
 *        type: integer
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/reunion/:reunionId", requireSignin, isAuth, read);


/**
 * @swagger   
 * /api/reunion/create: 
 *  post:
 *    summary: create reunion
 *    description: Use to request create reunion
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              nombre:
 *                  type: string
 *                  description: tipo reunion valido
 *              asunto:
 *                  type: string
 *                  description: asunto reunion valida
 *              temas:
 *                  type: string
 *                  description: temas reunion valida
 *              fecha:
 *                  type: string
 *                  description: fecha reunion valida
 *              encargado:
 *                  type: integer
 *                  description: encargado reunion valida
 *              participantes:
 *                  type: array
 *                  description: descripcion reunion valida
 *                  items:
 *                      type: integer              
 *              tipoReunion:
 *                  type: integer
 *                  description: tipoReunion reunion valida
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/reunion/create", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/reunion/update: 
 *  put:
 *    summary: update reunion
 *    description: Use to request update reunion
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              nombre:
 *                  type: string
 *                  description: tipo reunion valido
 *              asunto:
 *                  type: string
 *                  description: asunto reunion valida
 *              temas:
 *                  type: string
 *                  description: temas reunion valida
 *              fecha:
 *                  type: string
 *                  description: fecha reunion valida
 *              encargado:
 *                  type: integer
 *                  description: encargado reunion valida
 *              participantes:
 *                  type: array
 *                  description: descripcion reunion valida
 *                  items:
 *                      type: integer              
 *              tipoReunion:
 *                  type: integer
 *                  description: tipoReunion reunion valida
 *              estado:
 *                  type: string
 *                  description: estado reunion valid              
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/reunion/update/:reunionId", requireSignin, isAuth, update);


// params
router.param("reunionId", reunionById);

module.exports = router;
