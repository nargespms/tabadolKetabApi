

const userPostReqList = {
  $id: 'userPostReqList',
  title: 'userPostReq List',
  description: 'List for userPostReq',
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
            
                registerDate: {
                  type: 'string',
                },
                sendDate: {
                  type: 'string',
                },
                price: {
                  type: 'string',
                },
                bookNumber: {
                  type: 'string',
                },
                address: {
                  type: 'string',
                },
                status: {
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
                        mobile: {
                            type: 'string',
                        },
                        landLane: {
                            type: 'string',
                        },
                    }
                },
                description: {
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
  userPostReqList,
};
