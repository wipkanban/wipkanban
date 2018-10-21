// @flow
import React from "react";
import Navbar from "../Navbar";
import Search from "../Navbar/Search";
import UserAccountSettings from "../Navbar/Buttons/UserAccountSettings";
import TabsHome from "./TabsHome";
import GridContainer from "../GridContainer";
import MenuRight from "../Navbar/MenuRight";
import WelcomePage from "./WelcomePageContainer";

type Props = {
  user: Object
};

function Home({ user: { firstAccess } }: Props) {
  if (firstAccess) {
    return <WelcomePage />;
  }

  return (
    <div>
      <Navbar>
        <div />
        <MenuRight>
          <Search />
          <UserAccountSettings />
        </MenuRight>
      </Navbar>
      <GridContainer>
        <TabsHome />
      </GridContainer>
    </div>
  );
}

export default Home;
