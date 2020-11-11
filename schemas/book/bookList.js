

const bookList = {
  $id: 'bookList',
  title: 'Book List',
  description: 'List for book ',
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        hasPrevPage: {
          type: 'boolean',
        },
        hasNextPage: {
          type: 'boolean',
        },
        totalDocs: {
          type: 'number',
        },
        page: {
          type: 'number',
        },
        totalPages: {
          type: 'number',
        },
        offset: {
          type: 'number',
        },
        prevPage: {
          type: 'number',
        },
        nextPage: {
          type: 'number',
        },
        limit: {
          type: 'number',
        },
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              registerDate: {
                type: 'string',
              },
              category: {
                type: 'object',
              },
              tags: {
                type: 'object',
              },
              mainPrice: {
                type: 'number',
              },
              confirmRegisterDate: {
                type: 'number',
              },
              soldPrice: {
                type: 'number',
              },
              status: {
                type: 'string',
              },
              user: {
                type: 'object',
              },
              confirmedUser: {
                type: 'object',
              },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  bookList,
};
