import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import KanbanHome from "../KanbanHome";

interface ITabContainerProps {
  children: any;
}

function TabContainer(props: ITabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

interface ITabsHomeState {
  value: number;
}

class TabsHome extends React.Component<{}, ITabsHomeState> {
  state = {
    value: 0
  };

  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <Paper>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
          >
            <Tab label="Kanban boards" />
            <Tab label="OKRs" />
          </Tabs>
        </Paper>
        <div>
          {value === 0 && (
            <TabContainer>
              <KanbanHome />
            </TabContainer>
          )}
          {value === 1 && <TabContainer>ITEM 2</TabContainer>}
        </div>
      </div>
    );
  }
}

export default TabsHome;
