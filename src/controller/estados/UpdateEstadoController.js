import { prisma } from "../../database/client.js"

export class UpdateEstadoController {

    async handle(request, response) {

        const { id, nome, sigla } = request.body;

        // Validação ...

        // Sanitização ...

        const estado = await prisma.estado.update({

            where: {
                id: parseInt(id)
            },

            data: {
                nome,
                sigla,
                updated_at: new Date()
            }

        });

        return response.json(estado);

    }

}