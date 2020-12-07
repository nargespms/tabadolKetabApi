
const addAccessLevel = {
  $id: 'addAccessLevel',
  title: 'add new role for members',
  description: 'add new role for members',
  type: 'object',
  properties: {
    role: {
      type: 'object',
      properties: {
        roleName: {
          type: 'string',
          required:true,
        },
        users:{
            type:'object'
            properties:{
                addEdit:{
                    type:'boolean'
                }
                delete:{
                    type:'boolean'
                }
            }
        },
        book:{
            type:'object'
            properties:{
                addEdit:{
                    type:'boolean'
                }
                delete:{
                    type:'boolean'
                }
            }
        },
        messages:{
            type:'object'
            properties:{
                addEdit:{
                    type:'boolean'
                }
                delete:{
                    type:'boolean'
                }
            }
        },
        forbiddenBook:{
            type:'object'
            properties:{
                addDelete:{
                    type:'boolean'
                }
            }
        },
        discounts:{
            type:'object'
            properties:{
                addDelete:{
                    type:'boolean'
                }
            }
        },
        catDiscounts:{
            type:'object'
            properties:{
                addDelete:{
                    type:'boolean'
                }
            }
        },
        tickets:{
            type:'object'
            properties:{
                addDelete:{
                    type:'boolean'
                }
            }
        },
        transactions:{
            type:'object'
            properties:{
                preview:{
                    type:'boolean'
                }
            }
        },
        logs:{
            type:'object'
            properties:{
                preview:{
                    type:'boolean'
                }
            }
        },
        categories:{
            type:'object'
            properties:{
                addEdit:{
                    type:'boolean'
                }
            }
        },
        tags:{
            type:'object'
            properties:{
                addEditDelete:{
                    type:'boolean'
                }
            }
        },
        ordersList:{
            type:'object'
            properties:{
                previewAll:{
                    type:'boolean'
                },
                postList:{
                    type:'boolean'
                }
            }
        },
        invoices:{
            type:'object'
            properties:{
                add:{
                    type:'boolean'
                },
                delete:{
                    type:'boolean'
                },
                previewAll:{
                    type:'boolean'
                }
            }
        },
         
      },
    },
  },
};

module.exports = {
  addAccessLevel,
};
