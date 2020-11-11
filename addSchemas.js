const { usersList } = require('./schemas/usersSchema/usersList');
const { bookCategoriesLIst } = require('./schemas/bookCategorySchema/bookCategoriesList');
const { messagesList } = require('./schemas/messages/messagesList);
const { messageData } = require('./schemas/messages/messageData);
const { ticketsList } = require('./schemas/tickets/ticketsList);
const { ticketAdd } = require('./schemas/tickets/ticketAdd);
const { ticketProfile } = require('./schemas/tickets/ticketProfile);

class AddSchema {
  constructor({
    FastifyOpenApi,
  }) {
        this.fastify.addSchema(usersList);
        this.fastify.addSchema(bookCategoriesLIst);
        this.fastify.addSchema(messagesList);
        this.fastify.addSchema(messageData);
        this.fastify.addSchema(ticketsList);
        this.fastify.addSchema(ticketAdd);
        this.fastify.addSchema(ticketProfile);
  }
}
module.exports = AddSchema;