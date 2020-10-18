

const usersList = {
  $id: 'usersList',
  title: 'users List',
  description: 'Users list contain both staffs and clients',
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        hasPrevPage: {
          type: 'boolean',
        },
        hasNextPage: {
          type: 'boolean',
        },
        totalDocs: {
          type: 'number',
        },
        page: {
          type: 'number',
        },
        totalPages: {
          type: 'number',
        },
        offset: {
          type: 'number',
        },
        prevPage: {
          type: 'number',
        },
        nextPage: {
          type: 'number',
        },
        limit: {
          type: 'number',
        },
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              avatar: {
                type: 'object',
                nullable: 'true',
                properties: {
                  _id: {
                    type: 'string',
                  },
                  fileName: {
                    type: 'string',
                  },
                  view: {
                    type: 'string',
                  },
                  fullViewUrl: {
                    type: 'string',
                  },
                  extension: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                  },
                },
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
              phone: {
                type: 'string',
              },

              role: {
                type: 'string',
              },
              email: {
                type: 'string',
              },
              nationalId: {
                type: 'number',
              },
              status: {
                type: 'string',
                enum: status,
              },
              createdAt: {
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
  usersList,
};
