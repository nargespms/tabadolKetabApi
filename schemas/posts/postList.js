

const postList = {
  $id: 'postList',
  title: 'post List',
  description: 'List for posts registered ',
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
              type: {
                type: 'string',
              },
              registerDate: {
                type: 'string',
              },
              sendDate: {
                type: 'string',
              },
              cost: {
                type: 'string',
              },
              number: {
                type: 'number',
              },
              address: {
                type: 'string',
              },
              status: {
                type: 'string',
              },
              description: {
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
                    mobilePhone:{
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
  postList,
};
