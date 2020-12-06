
const addAuthor = {
  $id: 'addAuthor',
  title: 'add author',
  description: 'add author',
  type: 'object',
  properties: {
    author: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          required:true,
        },
        status:{
            type:'boolean'
        }
    
      },
    },
  },
};

module.exports = {
  addAuthor,
};
