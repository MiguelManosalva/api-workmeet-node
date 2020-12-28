const express = require("express");
const router = express.Router();

const { listTipo, updateTipo, createTipo, tipoReunionById} = require("../controllers/reunion.controller");
const { requireSignin, isAuth, isMaintainer } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/tipoReunion/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Reunion
 *    summary: tipoReunion
 *    parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        required: true
 *    description: Use to request obtain tipoReuniones
 *    responses:
 *      "200":
 *        description: A successful response
 */
router.get("/tipoReunion/:userId", requireSignin, isAuth, listTipo);

/**
 * @swagger   
 * /api/tipoReunion/create/{userId}: 
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Reunion
 *    summary: create tipo reunion
 *    description: Use to request create tipo reunion
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
router.post("/tipoReunion/create/:userId", requireSignin, isAuth, isMaintainer, createTipo);

/**
 * @swagger   
 * /api/tipoReunion/update/{userId}/{tipoReunionId}: 
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
 *      - name: tipoReunionId
 *        in: path
 *        type: integer
 *        required: true
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
router.put("/tipoReunion/update/:userId/:tipoReunionId", requireSignin, isAuth, isMaintainer, updateTipo);


// params
router.param("tipoReunionId", tipoReunionById);

module.exports = router;
