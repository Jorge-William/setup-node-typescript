import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()

const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const result = await prisma.habits.findMany(
        {
            where: {

            }
        }
    )
    return result
})

app.listen({ port: 3333 }, () => {
    console.log('Server rodando!!!');
})