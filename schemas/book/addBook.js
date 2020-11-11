
const addBook = {
  $id: 'addBook',
  title: 'Add book',
  description: 'Register new book',
  type: 'object',
  properties: {
    book: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
          required:true,
        },
        coverPrice: {
          type: 'number',
        },
        UndergraduatePrice: {
          type: 'number',
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
        category:{
            type:'object',
        },
        tags:{
            type:'object',
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
        nationalCode:{
            type:'string',
        },
        bookLang:{
            type:'string',
        },
        publisher:{
            type:'string',
        },
        description:{
            type:'string',
        },
        bookSummary:{
            type:'string',
        },
        donation:{
            type:'boolean',
        },
        weeklyDiscount:{
            type:'boolean',
        },
        status:{
            type:'string',
        },
        recycle: {
            type:'string',
        }
      },
    },
  },
};

module.exports = {
  addBook,
};
