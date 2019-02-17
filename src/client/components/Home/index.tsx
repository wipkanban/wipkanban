import * as React from "react";
import Navbar from "../Navbar";
import Search from "../Navbar/Search";
//import UserAccountSettings from "../Navbar/Buttons/UserAccountSettingsContainer";
import TabsHome from "./TabsHome";
import GridContainer from "../GridContainer";
import MenuRight from "../Navbar/MenuRight";
import WelcomePage from "./WelcomePageContainer";
import Preloader from "../PreloaderContainer";

interface IHomeProps {
  user: any
};

export default function Home({ user }: IHomeProps) {
  if (user.firstAccess) {
    return <WelcomePage />;
  }

  return (
    <div>
      <Preloader />
      <Navbar>
        <div />
        <MenuRight>
          <Search />

        </MenuRight>
      </Navbar>
      <GridContainer>
        <TabsHome />
      </GridContainer>
    </div>
  );
}
