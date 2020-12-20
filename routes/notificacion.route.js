const express = require("express");
const router = express.Router();

const { list, update, create, notificacionById } = require("../controllers/notificacion.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/notificacion:
 *  get:
 *    summary: notificacion
 *    description: Use to request obtain notificaciones
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/notificacion", requireSignin, isAuth, list);


/**
 * @swagger   
 * /api/notificacion/create: 
 *  post:
 *    summary: create notificacion
 *    description: Use to request create notificacion
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
router.post("/notificacion/create", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/notificacion/update: 
 *  put:
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
router.put("/notificacion/update/:notificacionId", requireSignin, isAuth, update);


// params
router.param("notificacionId", notificacionById);

module.exports = router;
