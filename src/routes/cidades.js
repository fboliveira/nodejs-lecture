import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js';

const cidadeRouter = Router();

// Create
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle);

// Get

// Get By Id

// Update

// Delete


export { cidadeRouter }