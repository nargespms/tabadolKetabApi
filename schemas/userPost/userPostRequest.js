
const userPostRequest = {
  $id: 'userPostRequest',
  title: 'userPost Request',
  description: 'post request for user to give his/her books to tabadol ',
  type: 'object',
  properties: {
    postReq: {
      type: 'object',
      properties: {
        id: {
        type: 'string',
        },
        book: {
          type: 'object',
          required:true,
          properties:{
              title: {
                  type:'string'
              }
              registerDate: {
                  type:'string'
              }
              category: {
                  type:'object'
              }
          }
        },
        address:{
            type:'Array',
            required:true,
        }
      },
    },
  },
};

module.exports = {
  userPostRequest,
};
