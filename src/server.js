import express from 'express';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';

const server = express();

const PORT = 4444;

server.use(express.json());

// Routes
server.use(mainRouter);
server.use(estadoRouter);

// Start server
server.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});
