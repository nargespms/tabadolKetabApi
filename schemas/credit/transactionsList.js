

const transactionsList = {
  $id: 'transactionsList',
  title: 'transactions List',
  description: 'List for transactions',
  type: 'array',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
            id: {
              type: 'string',
            },
            transactionDate: {
              type: 'string',
            },
            user:{
                type:Object,
                properties: {
                    id: {
                      type: 'string',
                    },
                   firstName: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    mobile: {
                      type: 'string',
                    },
                }
            },
            payType:{
                type:'string',
            },
            trackingCode:{
                type:'string',
            }
            amount:{
                type:'number',
            }
            description:{
                type:'string',
            }
            expireCreditDate:{
                type:'string',
            }
        },
      },
    },
  },
};

module.exports = {
  transactionsList,
};
