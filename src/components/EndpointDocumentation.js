import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  withStyles
} from "@material-ui/core";
import "../styles/EndpointDocumentation.css";

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: 16
  },
  usageText: {
    backgroundColor: theme.palette.background.default
  }
}));

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

export function EndpointDocumentation({ endpoint }) {
  const classes = useStyles();

  return (
    <div className="endpoint-container">
      <div className="endpoint-name">{endpoint.endpointName}</div>
      {endpoint.usages.map((usage, index) => (
        <div className="endpoint-usage" key={index}>
          <div className="usage-path">{usage.path}</div>
          <div className="usage-description">{usage.description}</div>
          <div className="usage-header">Usage</div>
          <div
            className={`usage-url ${classes.usageText}`}
          >{`GET ${usage.url}`}</div>
          {usage.queryParamKeys.length > 0 && (
            <div className="usage-table-header">Query Parameters</div>
          )}
          {usage.queryParamKeys.length > 0 && (
            <TableContainer className={classes.table} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usage.queryParamKeys.map((key, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>{key.parameter}</TableCell>
                      <TableCell>{key.value}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <div className="usage-header">Response Format</div>
          <div className="usage-description">
            {usage.responseFormat.description}
          </div>
          <div className="usage-table-header">
            {usage.responseFormat.objectName}
          </div>
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
                {usage.responseFormat.responseObjectKeys.map((key, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>{key.key}</TableCell>
                    <TableCell>{key.valueType}</TableCell>
                    <TableCell>{key.valueDescription}</TableCell>
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
