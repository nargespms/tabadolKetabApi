
const getBookViaBarCode = {
  $id: 'getBookViaBarCode',
  title: 'get Book Via BarCode ',
  description: 'get Book Via BarCode',
  type: 'object',
  params:{
      barcode:{
          type: 'string',
          required:true,
      }
  }
  properties: {
    book: {
      type: 'object',
      properties: {
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
      },
    },
  },
};

module.exports = {
  getBookViaBarCode,
};
