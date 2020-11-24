

const invoiceList = {
  $id: 'invoiceList',
  title: 'invoices List',
  description: 'List for invoices',
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
                invoiceNumber: {
                  type: 'string',
                },
                registerUser: {
                    type: 'object',
                    properties:{
                        firstName:{
                            type:'string'
                        },
                        lastName:{
                            type:'string'
                        },
                    }
                },
                client: {
                    type: 'object',
                    properties:{
                        firstName:{
                            type:'string'
                        },
                        lastName:{
                            type:'string'
                        },
                    }
                },
            
                registerDate: {
                  type: 'string',
                },
                totalPrice: {
                  type: 'number',
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
