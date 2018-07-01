// @flow
import * as React from "react";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import NavbarHome from '../NavbarHome'
import TabsHome from './TabsHome';
import GridContainer from '../GridContainer';

const theme = createMuiTheme();

function Home() {

  return (
    <MuiThemeProvider theme={theme}>
      <NavbarHome/>
      <GridContainer>
        <TabsHome/>
      </GridContainer>
    </MuiThemeProvider>
  );
}

export default Home;
