
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
        createdBy:{
            type:'object',
            required:true,
            properties:{
                id:'string',
                firstName:'string',
                lastName:'string',
                role:'string',
            }
        },
        createdAt:{
            type:'string'
        },
        threads:{
            type:'array',
            required:true,
            items:{
                type:'object'
                required:true,
                properties:{
                    id:'string',
                    description:'string',
                    createdBy:{
                        type:'object',
                        properties:{
                            id:'string',
                            firstName:'string',
                            lastName:'string',
                            role:'string',
                        },
                    },
                    createdAt:{
                        type:'string'
                    },
                },
            },
        }
      },
    },
  },
};

module.exports = {
  ticketData,
};
