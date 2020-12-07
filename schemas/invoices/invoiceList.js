

const invoiceList = {
  $id: 'invoiceList',
  title: 'invoices List',
  description: 'List for invoices',
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
              invoiceNumber: {
                type: 'string',
              },
              registerDate: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
              },
              registeredUser: {
                type: 'string',
              },
              client: {
                type: 'object',
                properties:{
                    id:{
                        type:'string',
                    },
                    firstName:{
                        type:'string'
                    },
                    lastName:{
                        type:'string'
                    }

                }
              },
              totalCost: {
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
  invoiceList,
};
