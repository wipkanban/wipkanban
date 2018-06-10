// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import Column from './Column'

const theme = createMuiTheme();

const styles : Object = {
  root: {
    flexGrow: 1
  },
  gridContainer: {
    padding: 2,
    overflowX:'scroll'
  }
};

type Props = {
  classes: Object
};

function LayoutApp(props : Props) {
  const {classes} = props;

  let columns = [
    {
      id:1,
      title: "A fazer",
      hColumns:[],
      vColumns:[
        {
          id:3,
          title:"Não priorizado",
          hColumns:[],
          vColumns:[],
          cards: [
            {
              id: 1,
              title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                "o quadro kanban"
            }
          ]
        },
        {
          id:4,
          title:"Pronta para começar",
          hColumns:[],
          vColumns:[],
          cards:[]
        },
      ],
      cards:[]
    },
    {
      id:2,
      title: "Fazendo",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:2,
      title: "Em teste",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:2,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:2,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:2,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:2,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 1,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <Navbar/>
      <SubNavbar/>
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
