

const discountsList = {
  $id: 'discountsList',
  title: 'discounts List',
  description: 'List for discounts',
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
                createdAt: {
                    type: 'string',
                },
                user:{
                    type:'Object',
                    properties: {
                        id: {
                            type: 'string',
                        },
                        firstName: {
                            type: 'string',
                        },
                        lastName: {
                            type: 'string',
                        },
                    }
                },
                category:{
                    type:'object'
                },
                type:{
                    type:'string'
                },
                amount:{
                    type:'number'
                },
                number:{
                    type:'number',
                },
                usedNumber:{
                    type:'number'
                },
                code:{
                    type:'string'
                },
                description:{
                    type:'string',
                }
            },
        },
        },
      },
    },
  },
};

module.exports = {
  discountsList,
};
