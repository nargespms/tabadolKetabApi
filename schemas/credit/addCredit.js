
const addCredit = {
  $id: 'addCredit',
  title: 'Add credit',
  description: 'increase credit',
  type: 'object',
  properties: {
    book: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        amount: {
          type: 'number',
          required:true,
        },
        users: {
          type: 'object',
          required:true,
          properties:{
              id:{
                  type:'string',
              },
              firstName:{
                  type:'string',
              },
              lastName:{
                  type:'string',
              },
          }
        },
        description:{
            type:'string',
        },
      },
    },
  },
};

module.exports = {
  addCredit,
};
