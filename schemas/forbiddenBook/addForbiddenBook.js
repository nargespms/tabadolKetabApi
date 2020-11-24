
const addForbiddenBook = {
  $id: 'addForbiddenBook',
  title: 'ForbiddenBook data',
  description: 'add ForbiddenBook',
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
        writer:{
            type:'string',
        },
        shabak:{
            type:'string',
        },
    
      },
    },
  },
};

module.exports = {
  addForbiddenBook,
};
