// @flow
import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import Search from '../Navbar/Search';
import UserAccountSettings from '../Navbar/Buttons/UserAccountSettings';
import TabsHome from "./TabsHome";
import GridContainer from "../GridContainer";
import MenuRight from "../Navbar/MenuRight";

const theme = createMuiTheme();

function Home() {
  return (
    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <Navbar>
        <div></div>
        <MenuRight>
          <Search />
          <UserAccountSettings />
        </MenuRight>
      </Navbar>
      <GridContainer>
        <TabsHome />
      </GridContainer>
    </MuiThemeProvider>
  );
}

export default Home;
