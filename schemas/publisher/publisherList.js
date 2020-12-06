

const publishersList = {
  $id: 'publishersList',
  title: 'publishers List',
  description: 'List of publishers',
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
                fullname: {
                    type: 'string',
                },
                createdAt: {
                    type: 'string',
                },
                registeredUser: {
                    type: 'string',
                },
                phone: {
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
  publishersList,
};
