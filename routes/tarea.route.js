const express = require("express");
const router = express.Router();
const { tareaById, list, create, update, remove } = require("../controllers/tarea.controller");
const { requireSignin, isAuth } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/tarea/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Tarea
 *    summary: tarea
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    description: Use to request obtain tareas
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/tarea/list/:userId", requireSignin, isAuth, list);

/**
 * @swagger   
 * /api/tarea/create/{userId}: 
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Tarea
 *    summary: create tarea
 *    description: Use to request create tarea
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
 *              asunto:
 *                  type: string
 *                  description: name tarea valid
 *              descripcion:
 *                  type: string
 *                  description: email tarea valid
 *              fechaVencimiento:
 *                  type: date
 *                  description: fecha tarea valid
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/tarea/create/:userId", requireSignin, isAuth, create);

/**
 * @swagger   
 * /api/tarea/update/{userId}/{tareaId}: 
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Tarea
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: tareaId
 *        in: path
 *        type: integer
 *        required: true
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              asunto:
 *                  type: string
 *                  description: asunto tarea valido
 *              descripcion:
 *                  type: string
 *                  description: descripcion tarea valida
 *              fechaVencimiento:
 *                  type: date
 *                  description: fecha tarea valid     
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.put("/tarea/update/:userId/:tareaId", requireSignin, isAuth, update);

/**
 * @swagger
 * /api/tarea/{userId}/{tareaId}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Tarea
 *    summary: tarea
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *      - name: tareaId
 *        in: path
 *        type: integer
 *        required: true
 *    description: Use to request remove tarea
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.delete("/tarea/:userId/:tareaId", requireSignin, isAuth, remove);


// params
router.param("tareaId", tareaById);

module.exports = router;
