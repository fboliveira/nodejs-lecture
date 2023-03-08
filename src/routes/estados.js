import { Router } from "express";
import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";
import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";

import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";

const estadoRouter = Router();

// CRUD - estados

// Select/Get All
const getAllEstadoController = new GetAllEstadoController();
estadoRouter.get('/estados', getAllEstadoController.handle);

// Get By Id
const getByIdEstadoController = new GetByIdEstadoController();
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Create
const createEstadoController = new CreateEstadoController();
estadoRouter.post('/estados', createEstadoController.handle);

// Update

// Delete


export { estadoRouter };