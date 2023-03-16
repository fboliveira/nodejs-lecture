import express from 'express';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import cors from "cors";

const server = express();

const PORT = 4444;

server.use(express.json());
server.use(cors());

// Routes
server.use(mainRouter);
server.use(estadoRouter);
server.use(cidadeRouter);

// Start server
server.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});
