const express = require("express");
const router = express.Router();

const { tareaById, list, create, update, remove } = require("../controllers/tarea.controller");
/**
 * @swagger
 * /api/tarea:
 *  get:
 *    summary: tarea
 *    description: Use to request obtain tareas
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/tarea", list);

/**
 * @swagger   
 * /api/tarea/create: 
 *  post:
 *    summary: create tarea
 *    description: Use to request create tarea
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
router.post("/tarea/create", create);



router.put("/remove/:tareaId", update);
router.delete("/tarea/:tareaId", remove);


// params
router.param("tareaId", tareaById);

module.exports = router;
