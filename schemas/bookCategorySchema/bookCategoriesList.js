

const bookCategoriesLIst = {
  $id: 'bookCategoriesLIst',
  title: 'Book categories List',
  description: 'List for book categories',
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
              id: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
              },
              status: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  bookCategoriesLIst,
};
