

const accessList = {
  $id: 'accessList',
  title: 'access level List',
  description: 'List for access level ',
  type: 'object',
  properties: {
    role: {
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
               roleName: {
                type: 'string',
                required:true,
               },
               createdAt: {
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
  accessList,
};
