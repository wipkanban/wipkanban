let columns = [
  {
    id: 1,
    title: "A fazer",
    hColumns: [],
    vColumns: [
      {
        id: 3,
        title: "Não priorizado",
        hColumns: [],
        vColumns: [
          {
            id: 3,
            title: "Antes de ver",
            hColumns: [],
            vColumns: [],
            cards: [
              {
                id: 1,
                title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                  "o quadro kanban"
              }
            ]
          }, {
            id: 3,
            title: "Agora ja vi",
            hColumns: [],
            vColumns: [],
            cards: [
              {
                id: 1,
                title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                  "o quadro kanban"
              }
            ]
          }
        ],
        cards: [
          {
            id: 1,
            title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
              "o quadro kanban"
          }
        ]
      }, {
        id: 4,
        title: "Pronta para começar",
        hColumns: [],
        vColumns: [],
        cards: []
      }
    ],
    cards: []
  }, {
    id: 2,
    title: "Fazendo",
    hColumns: [],
    vColumns: [],
    cards: [
      {
        id: 1,
        title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
          "o quadro kanban"
      }
    ]
  }
];
/**
 return columns.map(column => {
    return column.vColumns.length
      ? getWidthColumn(column.vColumns).reduce((acum, current) => current + acum)
      : defaultWidth;

  });
 */
function getWidthColumn(column, defaultWidth = 270) {

  return column.vColumns.length
    ? column
      .vColumns
      .map(col => getWidthColumn(col))
      .reduce((acum, current) => current + acum)
    : defaultWidth;

}

function getWidthColumn2(columns, defaultWidth = 270) {

  return columns.map(column => {
    return column.vColumns.length
      ? getWidthColumn2(column.vColumns).reduce((acum, current) => current + acum)
      : defaultWidth;

  });

}

console.log('Final', getWidthColumn2(columns).reduce((acum, current) => current + acum));
