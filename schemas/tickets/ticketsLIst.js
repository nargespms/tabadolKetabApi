

const ticketsList = {
  $id: 'ticketsList',
  title: 'tickets List',
  description: 'List for tickets',
  type: 'array',
  properties: {
    result: {
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
            summaryText: {
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
};

module.exports = {
  ticketsList,
};
