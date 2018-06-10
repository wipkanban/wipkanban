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
    overflowX:'scroll',
    marginTop:112,
    height:735
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
          id:2,
          title:"Não priorizado",
          hColumns:[],
          vColumns:[],
          cards: [
            {
              id: 31,
              title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                "o quadro kanban"
            },
            {
              id: 32,
              title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                "o quadro kanban"
            },
            {
              id: 33,
              title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                "o quadro kanban"
            },
            {
              id: 3,
              title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
                "o quadro kanban"
            },
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
      id:5,
      title: "Fazendo",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 6,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:7,
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
      id:8,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 9,
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
          id: 10,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:11,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 12,
          title: "Criar layouts da tela principal do quadro. Este é um exemplo de tarefa ou card d" +
            "o quadro kanban"
        },
      ]
    },
    {
      id:13,
      title: "Concluído",
      hColumns:[],
      vColumns:[],
      cards: [
        {
          id: 14,
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
