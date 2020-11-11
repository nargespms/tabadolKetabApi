const { STATUS_CODES } = require('http');

class FastifySchemaError {
  /**
   * @param {Number} statusCode
   * @param {String} message
   */
  constructor(statusCode, message = undefined) {
    this.statusCode = statusCode;
    if (typeof message === 'string') {
      this.message = message;
    } else {
      this.message = STATUS_CODES[statusCode.toString()];
    }
  }

  getSchema() {
    return {
      $id: 'GenericError',
      title: 'Generic Error',
      description: this.message,
      type: 'object',
      properties: {
        statusCode: {
          type: 'integer',
          example: this.statusCode,
        },
        message: {
          type: 'string',
          example: this.message,
        },
        validations: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        name: {
          type: 'string',
        },
        stack: {
          type: 'string',
        },
      },
    };
  }

  /**
   * @param {String} message
   */
  getErrorObject(message = undefined) {
    return {
      statusCode: this.statusCode,
      message: typeof message === 'string' ? message : this.message,
    };
  }

  /**
   * @param {import('fastify').FastifyReply} reply
   * @param {String} message
   */
  replyError(reply, message = undefined) {
    reply.status(this.statusCode);
    return reply.send(this.getErrorObject(message));
  }
}

module.exports = FastifySchemaError;
