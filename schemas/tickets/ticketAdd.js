
const ticketData = {
  $id: 'ticketData',
  title: 'tickets data',
  description: 'data for tickets',
  type: 'object',
  properties: {
    message: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        title: {
          type: 'string',
          required:true,
        },
        messagetext: {
          type: 'string',
          required:true,
        },
         attachments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
              },
              fileName: {
                type: 'string',
              },
              view: {
                type: 'string',
              },
              fullViewUrl: {
                type: 'string',
              },
              extension: {
                type: 'string',
              },
              type: {
                type: 'string',
              },
            },
          },
        },
        department:{
            type:'string',
            // if staff
            required:true,
        },
        recieversUsers:{
            type:'array',
            // if clients
            required:true,
            items:{
                id:{
                    type:stringify,
                },
            },
        },
    
      },
    },
  },
};

module.exports = {
  ticketData,
};
