const fastify = require("fastify");
const fastifyOpenApi = require("fastify-oas");
const FastifySchemaError = require("./FastifyOpenApi/FastifySchemaError");

class FastifyOpenApi {
  constructor({}) {
    this.setOpenApi();
  }
  static getFastify() {
    return this.fastify;
  }

  schemaError(statusCode, message) {
    return new FastifySchemaError(statusCode, message);
  }

  setOpenApi() {
    const defaultSchemaError = new FastifySchemaError(500);
    this.fastify.addSchema(defaultSchemaError.getSchema());
    this.fastify.register(fastifyOpenApi, {
      routePrefix: `api/v1/tabadol/docs`,
      exposeRoute: true,
      addModels: true,
      swagger: {
        openapi: "3.0.2",
        info: {
          title: "tabadol",
          version: "1.0.0"
        },

        consumes: ["application/json"],
        produces: ["application/json"],
        servers: [
          {
            url: `http://127.0.0.1:3500`,
            description: "tabadol"
          }
        ]
      }
    });
  }
}
module.exports = FastifyOpenApi;
