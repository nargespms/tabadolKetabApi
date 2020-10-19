
const messageData = {
  $id: 'MessagesData',
  title: 'messages data',
  description: 'data for messages',
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
        messageSummery: {
          type: 'string',
          required:true,
        },
        sendDate: {
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
        messageType:{
            type:'string',
        },
        sendSms:{
            type:'boolean',
        },
        recieverGroup:{
            type:'string',
        },
        reciverUsers:{
            type:'array',
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
  messageData,
};
