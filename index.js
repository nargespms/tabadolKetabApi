const FastifyOpenApi = require('./singleton/fastifyOpenApi');

const fastify = require('fastify')({
  logger: true
})

fastify.get('/api/v1/tabadol/docs', async (request, reply) => {
  return FastifyOpenApi.setOpenApi()
})

const app = FastifyOpenApi.getFastify();


console.log(FastifyOpenApi.getFastify());

const start = async () => {
  try {
    await fastify.listen(3500)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()