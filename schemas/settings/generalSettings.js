
const generalSettings = {
  $id: 'generalSettings',
  title: 'generalSettings ',
  description: 'generalSettings',
  type: 'object',
  properties: {
    generalSettings: {
      type: 'object',
      properties: {
        numberOfFreePostOfBook:{
            type:'string',
        },
        postPrice:{
            type:'number'
        },
        creditExpireTimeFromSellBook:{
            type:'string'
        },
        tabadolWageForSell:{
            type:'number'
        },
        discountForRangeDate:{
          type:'object'
          properties:{
            from:{
                type:'number'
            },
            to:{
                type:'number'
            },
            percent:{
                type:'number'
            },
          }
        }
      },
    },
  },
};

module.exports = {
  generalSettings,
};
