

const logList = {
  $id: 'logList',
  title: 'logs List',
  description: 'List for logs',
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
                
                title: {
                  type: 'string',
                },
            
                module: {
                  type: 'string',
                },
                date: {
                  type: 'string',
                },
                user: {
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
                userInfo: {
                  type: 'string',
                },
                IP: {
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
  logList,
};
