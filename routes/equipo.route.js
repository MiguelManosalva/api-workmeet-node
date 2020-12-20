const express = require("express");
const router = express.Router();

const { list, read, update, create, equipoById } = require("../controllers/equipo.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/equipos:
 *  get:
 *    summary: equipo
 *    description: Use to request obtain equipo
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/equipos", requireSignin, isAuth, list);

/**
 * @swagger
 * /api/equipo/{equipoId}:
 *  get:
 *    summary: equipo
 *    description: Use to request obtain equipo
 *    parameters:
 *      - equipoId: id
 *        in: path
 *        type: integer
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/equipo/:equipoId", requireSignin, isAuth, read);


/**
 * @swagger   
 * /api/equipo/create: 
 *  post:
 *    summary: create equipo
 *    description: Use to request create equipo
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              tipo:
 *                  type: string
 *                  description: tipo equipo valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion equipo valida
 *              encargado:
 *                  type: object
 *                  description: ecargado equipo valido
 *                  properties:
 *                      id: 
 *                          type: integer
 *              usuarios:
 *                  type: array
 *                  description: descripcion equipo valida
 *                  items:
 *                      type: integer              
 *              estado:
 *                  type: string
 *                  description: estado equipo valida
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/equipo/create", requireSignin, isAuth,  create);

/**
 * @swagger   
 * /api/equipo/update: 
 *  put:
 *    summary: update equipo
 *    description: Use to request update equipo
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              estado:
 *                  type: string
 *                  description: estado equipo valid              
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/equipo/update/:equipoId", requireSignin, isAuth, update);


// params
router.param("equipoId", equipoById);

module.exports = router;
