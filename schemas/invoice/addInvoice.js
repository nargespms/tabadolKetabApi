
const addInvoice = {
  $id: 'addInvoice',
  title: 'add invoice ',
  description: 'add invoice',
  type: 'object',
  properties: {
    invoice: {
      type: 'object',
      properties: {
        description:{
            type:'string',
        },
        invoiceItems:{
            type:'Array'
            required:true,
            items:{
                type:'Object',
                properties:{
                    barCode: {
                        type: 'string',
                        required:true,
                    },
                    bookName: {
                        type: 'string',
                        required:true,
                    },
                    priceWithDiscount: {
                        type: 'string',
                        required:true,
                    },
                    mainPrice: {
                        type: 'string',
                        required:true,
                    },
                }

            }
        },
        user: {
            type: 'object',
            properties:{
                firstName:{
                    type:'string'
                },
                lastName:{
                    type:'string'
                },
            }
        },
        description:{
            type:'string'
        }
      },
    },
  },
};

module.exports = {
  addInvoice,
};
