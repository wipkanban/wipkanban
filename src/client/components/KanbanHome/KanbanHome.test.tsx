import React from "react";
import KanbanHome from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import Grid from "@material-ui/core/Grid";
import BoardList from "../Board/BoardListContainer";
import TeamList from "../Team/TeamList";

describe("KanbanHome component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render 1 containing 1 TeamList and BoardListComponent", () => {
    let wrapper = shallow(<KanbanHome />);
    expect(wrapper.type()).toEqual(Grid);
    expect(wrapper.find(BoardList).type()).toEqual(BoardList);
    expect(wrapper.find(TeamList).type()).toEqual(TeamList);
    expect(wrapper).toMatchSnapshot();
  });
});
