import * as React from "react";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";

const styles: StyleRulesCallback = () => ({
  navLeft: {
    marginLeft: 20
  }
});

type Props = {
  classes: any;
};

const MenuLeft: React.StatelessComponent<any> = ({ classes }: Props) => {
  return (
    <div className={classes.navLeft}>
      <Button
        color="inherit"
        size="small"
        style={{
          position: "relative",
          paddingTop: 15
        }}
      >
        <DeveloperBoardIcon />
        <small
          style={{
            position: "absolute",
            top: 0,
            left: 12,
            fontSize: 8
          }}
        >
          {"Guarida/Tecnologia da informação"}
        </small>
        Minhas atividades
        <ArrowDropDownIcon />
      </Button>
    </div>
  );
};

export default withStyles(styles)(MenuLeft);
