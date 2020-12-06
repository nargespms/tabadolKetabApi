
const addTag = {
  $id: 'add tag',
  title: 'add tag',
  description: 'add tag',
  type: 'object',
  properties: {
    tag: {
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
  addTag,
};
