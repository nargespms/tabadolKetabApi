

const bookReqList = {
  $id: 'bookReqList',
  title: 'book request List',
  description: 'List for books requested',
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
                shabak: {
                    type: 'string',
                },
                requestDate: {
                    type: 'string',
                },
                category: {
                    type: 'object',
                },
                status: {
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
               
            },
        },
        },
      },
    },
  },
};

module.exports = {
  bookReqList,
};
