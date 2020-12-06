
const addPublisher = {
  $id: 'addPublisher',
  title: 'add publisher',
  description: 'add publisher',
  type: 'object',
  properties: {
    publisher: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          required:true,
        },
        address: {
          type: 'string',
        },
        phone: {
          type: 'string',
        },
        status:{
            type:'boolean'
        }
    
      },
    },
  },
};

module.exports = {
  addPublisher,
};
