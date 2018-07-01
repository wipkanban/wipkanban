// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar'
import Column from '../Board/Column'

const theme = createMuiTheme();

const styles : Object = {
  root: {
    flexGrow: 1
  },
  gridContainer: {
    overflowX:'auto',
    marginTop:68,
    height:700
  }
};

type Props = {
  classes: Object
};

function LayoutApp(props : Props) {
  const {classes} = props;

  let columns = [
    {
      id:4,
      title: "A fazer",
      hColumns:[],
      vColumns:[],
      cards:[
        {
          id: 31,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        }
      ]
    },
    {
      id:1,
      title: "Executando",
      hColumns:[
        {
          id:2,
          title: "Chamados",
          hColumns:[],
          vColumns:[
            {
              id:4,
              title: "Parado",
              hColumns:[],
              vColumns:[],
              cards:[]
            },
            {
              id:5,
              title: "Executando",
              hColumns:[],
              vColumns:[],
              cards:[
                {
                  id: 35,
                  title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                    "o quadro kanban"
                }
              ]
            }
          ],
          cards:[]
        },
        {
          id:3,
          title: "Projetos",
          hColumns:[],
          vColumns:[
            {
              id:41,
              title: "Parado",
              hColumns:[],
              vColumns:[],
              cards:[
                {
                  id: 36,
                  title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                    "o quadro kanban"
                }
              ]
            },
            {
              id:51,
              title: "Executando",
              hColumns:[],
              vColumns:[],
              cards:[]
            }
          ],
          cards:[]
        }
      ],
      vColumns:[],
      cards:[]
    },
    {
      id:9,
      title: "Em teste",
      hColumns:[],
      vColumns:[],
      cards:[
        {
          id: 32,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        }
      ]
    },
    {
      id:10,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards:[
        {
          id: 33,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
        {
          id: 34,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        }
      ]
    }
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <Navbar/>
      <Grid
        container
        justify="flex-start"
        wrap="nowrap"
        spacing={0}
        className={classes.gridContainer}>

        {columns.map(column => (<Column key={column.id}
                                        vColumns={column.vColumns}
                                        hColumns={column.hColumns}
                                        title={column.title}
                                        cards={column.cards}/>))}
      </Grid>
    </MuiThemeProvider>
  );
}

const teste = withStyles(styles)(LayoutApp);

export default teste;
