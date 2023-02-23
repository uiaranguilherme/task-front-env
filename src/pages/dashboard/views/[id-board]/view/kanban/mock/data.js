import { v4 as uuidv4 } from "uuid";

export const dataMock = {
  columns: {
    Backlog: {
      tasks: [],
    },
    "Em Análise": {
      tasks: [
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
      ],
    },
    Executando: {
      tasks: [
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
      ],
    },
    Teste: {
      tasks: [
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
      ],
    },
    "Em HML": {
      tasks: [
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
        {
          _id: uuidv4(),
          title: "[PORTAL DIGITAL] - Login",
          description:
            "Realizar login na plataforma com altenticação de dois fatores",
          author: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          responsible: {
            name: "Uiaran Guilherme",
            email: "uiaran@hotmail.com",
          },
          tags: ["Portal Pós Venda"],
          childs: [
            {
              _id: uuidv4(),
              title: "[PORTAL DIGITAL] - Login",
              description:
                "Realizar login na plataforma com altenticação de dois fatores",
              author: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
              responsible: {
                name: "Uiaran Guilherme",
                email: "uiaran@hotmail.com",
              },
            },
          ],
          properties: {
            changeAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            createdAt: new Date().toLocaleDateString({
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            severity: "3 - Médio",
            estimated: {
              original: 1,
              remaining: 0,
              complete: 1,
            },
            block: {
              type: "Local",
              reason: "necessidade de concluir as rotas em back-end",
            },
          },
          discussion: [
            {
              name: "",
              email: "",
              comment: "",
            },
          ],
        },
      ],
    },
    Finalizado: {
      tasks: [],
    },
  },
  columnOrder: [
    {
      id: uuidv4(),
      title: "Backlog",
      type: "backlog",
    },
    {
      id: uuidv4(),
      title: "Em Análise",
      type: "default",
    },
    {
      id: uuidv4(),
      title: "Executando",
      type: "default",
    },
    {
      id: uuidv4(),
      title: "Teste",
      type: "default",
    },
    {
      id: uuidv4(),
      title: "Em HML",
      type: "default",
    },
    {
      id: uuidv4(),
      title: "Finalizado",
      type: "entregue",
    },
  ],
};

/*
export const dados = [
  {
    fila: {
      _id: "1a5sa4s87as5a1s5as4a8s7",
      name: "Em Produção",
      limit: 20,
    },
    tasks: [
      {
        _id: 10,
        title: "[PORTAL DIGITAL] - Login",
        description:
          "Realizar login na plataforma com altenticação de dois fatores",
        author: {
          name: "Uiaran Guilherme",
          email: "uiaran@hotmail.com",
        },
        responsible: {
          name: "Uiaran Guilherme",
          email: "uiaran@hotmail.com",
        },
        tags: ["Portal Pós Venda"],
        childs: [],
        properties: {
          changeAt: new Date().toLocaleDateString({
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          createdAt: new Date().toLocaleDateString({
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          severity: "3 - Médio",
          estimated: {
            original: 1,
            remaining: 0,
            complete: 1,
          },
          block: {
            type: "Local",
            reason: "necessidade de concluir as rotas em back-end",
          },
        },
        discussion: [
          {
            name: "",
            email: "",
            comment: "",
          },
        ],
      },
    ],
  },
  {
    fila: {
      _id: "a4s8as7a8s78a4s8a4s8as",
      name: "Em Ação",
      limit: 20,
    },
    tasks: [
      {
        _id: 11,
        title: "[PORTAL DIGITAL] - Login",
        description:
          "Realizar login na plataforma com altenticação de dois fatores",
        author: {
          name: "Uiaran Guilherme",
          email: "uiaran@hotmail.com",
        },
        responsible: {
          name: "Uiaran Guilherme",
          email: "uiaran@hotmail.com",
        },
        tags: ["Portal Pós Venda"],
        childs: [],
        properties: {
          changeAt: new Date().toLocaleDateString({
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          createdAt: new Date().toLocaleDateString({
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          severity: "3 - Médio",
          estimated: {
            original: 1,
            remaining: 0,
            complete: 1,
          },
          block: {
            type: "Local",
            reason: "necessidade de concluir as rotas em back-end",
          },
        },
        discussion: [
          {
            name: "",
            email: "",
            comment: "",
          },
        ],
      },
    ],
  },
];

export const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
  },
};
*/
