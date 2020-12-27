const express = require("express");
const router = express.Router();

const { list, read, update, create, equipoById } = require("../controllers/equipo.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/equipo/list/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Equipo
 *    summary: equipo
 *    description: Use to request obtain equipo
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/equipo/list/:userId", requireSignin, isAuth, list);

/**
 * @swagger
 * /api/equipo/{userId}/{equipoId}:
 *  get:
 *    security:
 *      - bearerAuth: [] 
 *    tags:
 *      - Equipo
 *    summary: equipo
 *    description: Use to request obtain equipo
 *    parameters:
 *      - name: equipoId
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
router.get("/equipo/:userId/:equipoId", requireSignin, isAuth, equipoById, read);


/**
 * @swagger   
 * /api/equipo/create/{userId}: 
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Equipo
 *    summary: create equipo
 *    description: Use to request create equipo
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
 *                  description: nombre equipo valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion equipo valida
 *              encargado:
 *                  type: object
 *                  description: ecargado equipo valido
 *                  properties:
 *                      id: 
 *                          type: string
 *              usuarios:
 *                  type: array
 *                  description: descripcion equipo valida
 *                  items:
 *                      type: string              
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/equipo/create/:userId", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/equipo/update/{userId}/{equipoId}: 
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Equipo
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: equipoId
 *        in: path
 *        type: integer
 *        required: true
 *    summary: update equipo
 *    description: Use to request update equipo
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              nombre:
 *                  type: string
 *                  description: estado equipo valid              
 *              descripcion:
 *                  type: string
 *                  description: estado equipo valid  
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/equipo/update/:userId/:equipoId", requireSignin, isAuth, update);


// params
router.param("equipoId", equipoById);

module.exports = router;
