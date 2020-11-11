

const messagesList = {
  $id: 'MessagesList',
  title: 'messages List',
  description: 'List for messages',
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
            messageSummery: {
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
                    mobile: {
                      type: 'string',
                    },
                }
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
                   
                }
            },
            messageType:{
                type:'string',
            },
            sendSms:{
                type:'boolean',
            }
        },
      },
    },
  },
};

module.exports = {
  messagesList,
};
