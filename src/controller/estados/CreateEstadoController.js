import { prisma } from "../../database/client.js"

export class CreateEstadoController {

    async handle(request, response) {

        const { nome, sigla } = request.body;

        // Validações ...

        // Sanitazação ...

        // Persistência
        const estado = await prisma.estado.create({

            data: {
                nome,
                sigla
            }

        });

        return response.json(estado);

    }

}