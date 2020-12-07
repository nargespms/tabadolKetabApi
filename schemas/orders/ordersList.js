

const ordersList = {
  $id: 'ordersList',
  title: 'orders List',
  description: 'List of orders',
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
                type: {
                    type: 'string',
                },
                orderNumber: {
                    type: 'string',
                },
                user: {
                    type: 'object',
                    properties:{
                        id:{
                            type:'string'
                        },
                        firstName:{
                            type:'string'
                        },
                        lastName:{
                            type:'string'
                        },
                        landLane:{
                            type:'string'
                        },
                    }
                },
                createdAt: {
                    type: 'string',
                },
                
                bookNumber: {
                    type: 'string',
                },
                phone: {
                    type: 'string',
                },
                cost: {
                    type: 'string',
                },
                post: {
                    type: 'boolean',
                },
                doneDate:{
                    type:'string'
                }
                status:{
                    type:'string'
                }
            },
          },
        },
      },
    },
  },
};

module.exports = {
  ordersList,
};
