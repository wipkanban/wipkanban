// @flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/index";
import Column from "../Board/Column";
import MenuLeft from '../Navbar/MenuLeft';
import MenuRight from '../Navbar/MenuRight';
import columns from './fakeData';

const theme = createMuiTheme();

const styles: Object = {
  root: {
    flexGrow: 1
  },
  gridContainer: {
    overflowX: "auto",
    marginTop: 68,
    height: 700
  }
};

type Props = {
  classes: Object
};

function LayoutApp(props: Props) {
  const { classes } = props;



  return (
    <MuiThemeProvider theme={theme}>
      <Navbar>
        <MenuLeft />
        <MenuRight />
      </Navbar>
      <Grid
        container
        justify="flex-start"
        wrap="nowrap"
        spacing={0}
        className={classes.gridContainer}
      >
        {columns.map(column => (
          <Column
            key={column.id}
            vColumns={column.vColumns}
            hColumns={column.hColumns}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </Grid>
    </MuiThemeProvider>
  );
}

const teste = withStyles(styles)(LayoutApp);

export default teste;
