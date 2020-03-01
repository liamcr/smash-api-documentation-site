import React from "react";
import { otherTypes } from "../custom/otherTypes";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: 16
  }
}));

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

export function Types() {
  const classes = useStyles();

  return (
    <div className="types-container">
      <div className="docs-header">Types</div>
      {otherTypes.map((type, index) => (
        <div key={index} className="type-container">
          <div className="table-header">{type.name}</div>
          <TableContainer className={classes.table} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>
                  <TableCell>Value Type</TableCell>
                  <TableCell>Value Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {type.keys.map((key, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>{key.name}</TableCell>
                    <TableCell>{key.type}</TableCell>
                    <TableCell>{key.description}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
}
