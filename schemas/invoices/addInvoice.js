
const addInvoice = {
  $id: 'addInvoice',
  title: 'add invoice',
  description: 'add invoice',
  type: 'object',
  properties: {
    invoice: {
      type: 'object',
      properties: {
        user: {
          type: 'string',
          required:true,
        },
        
        invoiceItems: {
          type: 'array',
          userId:{
            type:'string',
          },
          description:{
            type:'string',
          },
          items: {
            type: 'object',
            properties: {
              bookBarcode: {
                type: 'string',
              },
              Bookname: {
                type: 'string',
              },
              mainPrice: {
                type: 'string',
              },
              priceWithDiscount: {
                type: 'string',
              },
              
              
            },
          },
        },
      },
    },
  },
};

module.exports = {
  addInvoice,
};
