export const dados = [
  {
    fila: {
      _id: "",
      name: "Em Produção",
      limit: 20,
    },
    tasks: [
      {
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
          createdAt: new Date().toLocaleDateString("en-US", {
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
