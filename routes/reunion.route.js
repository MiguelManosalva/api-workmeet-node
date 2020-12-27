const express = require("express");
const router = express.Router();

const { list, update, create, reunionById, read } = require("../controllers/reunion.controller");
const { requireSignin, isAuth, isMaintainer } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/reunion/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Reunion
 *    summary: reunion
 *    description: Use to request obtain reunion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/reunion/list/:userId", requireSignin, isAuth, list);

/**
 * @swagger
 * /api/reunion/{userId}/{reunionId}:
 *  get:
 *    security:
 *      - bearerAuth: [] 
 *    tags:
 *      - Reunion
 *    summary: reunion
 *    description: Use to request obtain reunion
 *    parameters:
 *      - name: reunionId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/reunion/:userId/:reunionId", requireSignin, isAuth, reunionById, read);


/**
 * @swagger   
 * /api/reunion/create/{userId}: 
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Reunion
 *    summary: create reunion
 *    description: Use to request create reunion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
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
router.post("/reunion/create/:userId", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/reunion/update: 
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Reunion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: reunionId
 *        in: path
 *        type: integer
 *        required: true
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
router.put("/reunion/update/:userId/:reunionId", requireSignin, isAuth, update);


// params
router.param("reunionId", reunionById);

module.exports = router;
