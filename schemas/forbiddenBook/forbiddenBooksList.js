

const forbiddenBooksList = {
  $id: 'forbiddenBooksList',
  title: 'forbiddenBooks List',
  description: 'List for forbiddenBooks',
  type: 'array',
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
            
                registerDate: {
                  type: 'string',
                },
                shabak: {
                  type: 'string',
                },
                writer: {
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
  forbiddenBooksList,
};
