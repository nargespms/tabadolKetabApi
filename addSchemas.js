const { usersList } = require('./schemas/usersSchema/usersList');
const { bookCategoriesLIst } = require('./schemas/bookCategorySchema/bookCategoriesList');
const { messagesList } = require('./schemas/messages/messagesList);
const { messageData } = require('./schemas/messages/messageData);
const { ticketsList } = require('./schemas/tickets/ticketsList);
const { ticketData } = require('./schemas/tickets/ticketData);

class AddSchema {
  constructor({
    FastifyOpenApi,
  }) {
        this.fastify.addSchema(usersList);
        this.fastify.addSchema(bookCategoriesLIst);
        this.fastify.addSchema(messagesList);
        this.fastify.addSchema(messageData);
        this.fastify.addSchema(ticketsList);
        this.fastify.addSchema(ticketData);
  }
}
module.exports = AddSchema;