
const discountData = {
  $id: 'discountData',
  title: 'discount data',
  description: 'add discounts',
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
        fromDate: {
          type: 'string',
          required:true,
        },
        toDate: {
          type: 'string',
          required:true,
        },
        type: {
          type: 'string',
          required:true,
        },
        amount: {
          type: 'string',
          required:true,
        },
        number:{
            type:'number'
        },
        prefixCode:{
            type:'string'
        },
        maxAmount:{
            type:'number'
        },
        category:{
            type:'object',
        },
        discription:{
            type:'string'
        },
        
        recieversUsers:{
            type:'array',
            required:true,
            items:{
                type:'object',
                id:{
                    type:'string',
                },
                firstName:{
                    type:'string',
                },
                lastName:{
                    type:'string',
                },
            },
        },
    
      },
    },
  },
};

module.exports = {
  discountData,
};
