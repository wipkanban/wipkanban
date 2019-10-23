import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/index";
import Column from "./Column";
import MenuLeft from "../Navbar/MenuLeft";
import MenuRight from "../Navbar/MenuRight";
import UserAccountSettings from "../Navbar/Buttons/UserAccountSettingsContainer";
import AddCardButton from "../Navbar/Buttons/AddCardButton";
import DashboardIconButton from "../Navbar/Buttons/DashboardIconButton";
import TransferWithinAStationIconButton from "../Navbar/Buttons/TransferWithinAStationIconButton";
import CalendarIconButton from "../Navbar/Buttons/CalendarIconButton";
import FilterListIconButton from "../Navbar/Buttons/FilterListIconButton";
import GroupAddIconButton from "../Navbar/Buttons/GroupAddIconButton";
import HistoryIconButton from "../Navbar/Buttons/HistoryIconButton";
import SettingsIconButton from "../Navbar/Buttons/SettingsIconButton";
import ZoomOutMapIconButton from "../Navbar/Buttons/ZoomOutMapIconButton";
import Search from "../Navbar/Search";

interface IBoardProps {
  classes: any;
  columns: any;
}

const styles: any = () => ({
  root: {
    flexGrow: 1
  },
  gridContainer: {
    overflowX: "auto",
    marginTop: 68,
    height: 700
  }
});

function BoardMain(props: IBoardProps) {
  const { classes, columns } = props;

  return (
    <div>
      <Navbar>
        <MenuLeft />
        <MenuRight>
          <AddCardButton />
          <DashboardIconButton />
          <TransferWithinAStationIconButton />
          <CalendarIconButton />
          <FilterListIconButton />
          <GroupAddIconButton />
          <HistoryIconButton />
          <SettingsIconButton />
          <ZoomOutMapIconButton />
          <Search />
          <UserAccountSettings />
        </MenuRight>
      </Navbar>
      <Grid
        container
        justify="flex-start"
        wrap="nowrap"
        spacing={0}
        className={classes.gridContainer}
      >
        {columns.map((column: any) => (
          <Column
            key={column.id}
            vColumns={column.vColumns}
            hColumns={column.hColumns}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(BoardMain);
