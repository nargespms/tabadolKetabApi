

const authorList = {
  $id: 'authorList',
  title: 'author List',
  description: 'List of authors',
  type: 'array',
  properties: {
    result: {
      type: 'object',
        items: {
        type: 'Array',
            properties: {
                type:'object',
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
  },
};

module.exports = {
  authorList,
};
