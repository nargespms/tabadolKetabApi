

const ticketsList = {
  $id: 'ticketsList',
  title: 'tickets List',
  description: 'List for tickets',
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
            
                sendDate: {
                type: 'string',
                },
                receiver:{
                    type:Object,
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
                sender:{
                    type:Object,
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
  ticketsList,
};
