export default {
  openapi: '3.0.0',
  info: {
    title: 'Provas Online',
    description: 'Documentação do projeto de uma api para realização de provas online',
    version: '1.0.0',
    contact: {
      name: 'Matheus Abreu',
      email: 'matheus.la1999@gmail.com',
      url: 'https://www.linkedin.com/in/matheus-abreu-js'
    }
  },
  tags: [
    {
      name: 'exams',
      description: 'Your Exams'
    },
    {
      name: 'questions',
      description: 'Your Questions'
    },
    {
      name: 'options',
      description: 'Question Options'
    }
  ],
  schemes: [
    'https',
    'http'
  ],
  paths: {
    '/exams': {
      post: {
        tags: [
          'exams'
        ],
        summary: 'Add a new exams to the questions',
        description: '',
        consumes: [
          'application/json',
          'application/xml'
        ],
        produces: [
          'application/xml',
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Pet object that needs to be added to the questions',
            required: true,
            schema: {
              $ref: '#/definitions/Exams'
            }
          }
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss'
            ]
          }
        ]
      },
      put: {
        tags: [
          'exams'
        ],
        summary: 'Update an existing exams',
        description: '',
        operationId: 'updatePet',
        consumes: [
          'application/json',
          'application/xml'
        ],
        produces: [
          'application/xml',
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Exams'
            }
          }
        ]
      },
      get: {
        tags: [
          'exams'
        ],
        summary: 'Update an existing exams',
        description: '',
        operationId: 'updatePet',
        consumes: [
          'application/json',
          'application/xml'
        ],
        produces: [
          'application/xml',
          'application/json'
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss'
            ]
          }
        ]
      },
      delete: {
        tags: [
          'exams'
        ],
        summary: 'Update an existing exams',
        description: '',
        operationId: 'updatePet',
        consumes: [
          'application/json',
          'application/xml'
        ],
        produces: [
          'application/xml',
          'application/json'
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss'
            ]
          }
        ]
      }
    },
    '/questions': {
      get: {
        tags: [
          'questions'
        ],
        summary: 'Returns exams inventories by status',
        description: 'Returns a map of status codes to quantities',
        operationId: 'getInventory',
        produces: [
          'application/json'
        ],
        parameters: []
      },
      post: {
        tags: [
          'questions'
        ],
        summary: 'Place an order for a exams',
        description: '',
        operationId: 'placeOrder',
        produces: [
          'application/xml',
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the exams',
            required: true,
            schema: {
              $ref: '#/definitions/Questions'
            }
          }
        ]
      },
      put: {
        tags: [
          'questions'
        ],
        summary: 'Place an order for a exams',
        description: '',
        operationId: 'placeOrder',
        produces: [
          'application/xml',
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the exams',
            required: true,
            schema: {
              $ref: '#/definitions/Questions'
            }
          }
        ]
      },
      delete: {
        tags: [
          'questions'
        ],
        summary: 'Delete purchase order by ID',
        description: 'For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors',
        operationId: 'deleteOrder',
        produces: [
          'application/xml',
          'application/json'
        ]
      }
    },
    '/options': {
      post: {
        tags: [
          'options'
        ],
        summary: 'Place an order for a exams',
        description: '',
        operationId: 'placeOrder',
        produces: [
          'application/xml',
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the exams',
            required: true,
            schema: {
              $ref: '#/definitions/Options'
            }
          }
        ]
      },
      delete: {
        tags: [
          'options'
        ],
        summary: 'Delete purchase order by ID',
        description: 'For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors',
        operationId: 'deleteOrder',
        produces: [
          'application/xml',
          'application/json'
        ]
      }
    }
  },
  definitions: {
    Questions: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64'
        },
        exam_id: {
          type: 'uuid',
          example: 'uuid Exam id'
        },
        statement: {
          type: 'string',
          example: 'statementTeste'
        }
      },
      xml: {
        name: 'Questions'
      }
    },
    Exams: {
      type: 'object',
      required: [
        'name',
        'description',
        'type'
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64'
        },
        name: {
          type: 'string',
          example: 'nameTeste'
        },
        description: {
          type: 'string',
          example: 'teste de geografia'
        },
        type: {
          type: 'string',
          example: 'ONLINE'
        }
      },
      xml: {
        name: 'Exams'
      }
    },
    Options: {
      type: 'object',
      properties: {
        question_id: {
          type: 'uuid',
          example: 'uuid Question id'
        },
        key: {
          type: 'string',
          example: 'a'
        },
        value: {
          type: 'string',
          example: 'valueTeste'
        },
        correct: {
          type: 'boolean',
          example: true
        }
      },
      xml: {
        name: 'Options'
      }
    }
  }
}
