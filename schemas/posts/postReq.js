
const postReq = {
  $id: 'postReq',
  title: 'post request for user books',
  description: 'post request for user books',
  type: 'object',
  properties: {
    post: {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          required:true,
          properties:{
            postalCode:{
                type:'string'
            },
            phone:{
                type:'string'
            }
            address:{
                type:'string'
            }
          }
        },
        
         books: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              bookId: {
                type: 'string',
              },
              Bookname: {
                type: 'string',
              },
              category: {
                type: 'string',
              },
              registeredDate: {
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
  postReq,
};
