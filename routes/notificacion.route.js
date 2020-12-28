const express = require("express");
const router = express.Router();

const { list, update, create, notificacionById } = require("../controllers/notificacion.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/notificacion/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Notificacion
 *    summary: notificacion
 *    description: Use to request obtain notificacion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/notificacion/:userId", requireSignin, isAuth, list);


/**
 * @swagger   
 * /api/notificacion/create/{userId}: 
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Notificacion
 *    summary: create notificacion
 *    description: Use to request create notificacion
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
 *              tipo:
 *                  type: string
 *                  description: tipo notificacion valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion notificacion valida
 *              encargado:
 *                  type: object
 *                  description: ecargado notificacion valido
 *                  properties:
 *                      id: 
 *                          type: integer
 *              usuarios:
 *                  type: array
 *                  description: descripcion notificacion valida
 *                  items:
 *                      type: integer              
 *              estado:
 *                  type: string
 *                  description: estado notificacion valida
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/notificacion/create/:userId", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/notificacion/update/{userId}/{notificacionId}: 
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Notificacion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: notificacionId
 *        in: path
 *        type: integer
 *        required: true
 *    summary: update notificacion
 *    description: Use to request update notificacion
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              estado:
 *                  type: string
 *                  description: estado notificacion valid              
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/notificacion/update/:userId/:notificacionId", requireSignin, isAuth, update);


// params
router.param("notificacionId", notificacionById);

module.exports = router;
