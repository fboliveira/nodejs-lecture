import { prisma } from "../../database/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/binary.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.body;

        // Validações ...
        try{
            const estado = await prisma.estado.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(estado);
        } catch(error) {

            if (error.code === "P2025" && error instanceof PrismaClientKnownRequestError) {

                    return response.status(400).json({
                        message: `[DeleteEstadoController] Estado id: ${id} não existe.`
                    });

                } else {

                    return response.status(500).json({
                        message: error,
                        estado_id: id
                    });

                }

        }

    }

}