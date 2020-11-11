
const addBookReq = {
  $id: 'bookRequestData',
  title: 'bookRequest data',
  description: 'add book request',
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
        category:{
            type:'object',
        },
        discription:{
            type:'string'
        },
        writer:{
            type:'string',
        },
        author:{
            type:'string',
        },
        translator:{
            type:'string',
        },
        searcher:{
            type:'string',
        },
        shabak:{
            type:'string',
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
    
      },
    },
  },
};

module.exports = {
  addBookReq,
};
