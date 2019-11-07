import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Card from "./Card";
import ColumnHeader from "./ColumnHeader";
import ColumnBoard from "./Column";
import AddIcon from "@material-ui/icons/AddCircle";

type Props = {
  classes?: any;
  title: string;
  cards?: any;
  vColumns?: any;
  hColumns?: any;
};

type PropsContainer = {
  children: React.Component<typeof Column>;
};

function ColumnContainer(props: PropsContainer) {
  let { children } = props;

  return (
    <Grid container justify="flex-start" spacing={0}>
      {children}
    </Grid>
  );
}

function Column(props: Props) {
  const { title, classes, cards, vColumns, hColumns } = props;

  let children = null;

  if (vColumns && vColumns.length) {
    children = (
      <ColumnContainer>
        {vColumns.map((column: any) => (
          <ColumnBoard
            key={column.id}
            vColumns={column.vColumns}
            hColumns={column.hColumns}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </ColumnContainer>
    );
  } else if (hColumns.length) {
    children = hColumns.map((column: any) => (
      <ColumnBoard
        key={column.id}
        vColumns={column.vColumns}
        hColumns={column.hColumns}
        title={column.title}
        cards={column.cards}
      />
    ));
  } else {
    children = cards.map((card: any) => (
      <Card key={card.id} title={card.title} />
    ));
  }

  return (
    <Grid item className={classes.column}>
      <Paper className={classes.parentColumn} elevation={0}>
        <ColumnHeader title={title} /> {children}
        {!hColumns.length && !vColumns.length ? (
          <div style={{ textAlign: "center" }}>
            <IconButton color="default" aria-label="Add card">
              <AddIcon />
            </IconButton>
          </div>
        ) : (
          ""
        )}
      </Paper>
    </Grid>
  );
}

function getWidthColumn(columns: any, defaultWidth: number = 270): any {
  return columns.map((column: any) => {
    return column.vColumns.length
      ? getWidthColumn(column.vColumns).reduce(
          (acum: number, current: number) => current + acum
        ) + column.vColumns.length
      : defaultWidth;
  });
}

function ColumnFactory(props: Props) {
  const { vColumns, hColumns } = props;

  let vWidth: number = 0;
  if (vColumns.length) {
    vWidth =
      getWidthColumn(vColumns).reduce(
        (acum: number, current: number) => current + acum
      ) + vColumns.length;
  } else if (hColumns.length) {
    vWidth = Math.max.apply(null, getWidthColumn(hColumns));
  } else {
    vWidth = 270;
  }

  const styles: any = () => ({
    parentColumn: {
      height: hColumns.length ? 450 : "100%"
    },
    column: {
      width: vWidth,
      height: hColumns.length ? 450 : "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#e0e0e0"
    }
  });

  let Component = withStyles(styles)(Column);

  return <Component {...props} />;
}

export default ColumnFactory;
