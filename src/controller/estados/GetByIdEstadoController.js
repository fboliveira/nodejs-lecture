import { prisma } from "../../database/client.js";

export class GetByIdEstadoController {

    async handle(request, response) {

        // /estados/{id} <- request.params
        // /estados?id={id} <- request.query            

        const { id } = request.params;
        
        const estado = await prisma.estado.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(estado);

    }

}