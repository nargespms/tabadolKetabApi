const { usersList } = require('./schemas/usersSchema/usersList');
const { bookCategoriesLIst } = require('./schemas/bookCategorySchema/bookCategoriesList');
const { messagesList } = require('./schemas/messages/messagesList);

class AddSchema {
  constructor({
    FastifyOpenApi,
  }) {
        this.fastify.addSchema(usersList);
        this.fastify.addSchema(bookCategoriesLIst);
        this.fastify.addSchema(messagesList);
  }
}
module.exports = AddSchema;