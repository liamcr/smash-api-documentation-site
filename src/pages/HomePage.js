import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  CircularProgress,
  Card,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    ...theme.typography.subtitle1,
    fontSize: "24pt"
  },
  jsonArea: {
    overflow: "scroll",
    padding: "10px",
    resize: "none",
    width: "100%",
    color: "whitesmoke",
    backgroundColor: "transparent",
    border: "none",
    disabled: "true",
    height: "500px"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    height: "500px"
  },
  query: {
    display: "inline"
  },
  queryCont: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    width: "fit-content",
    margin: "auto",
    padding: "10px"
  },
  body: {
    width: "90%",
    margin: "auto"
  },
  root: {
    minWidth: 275,
    minHeight: 275,
    width: "100%",
    maxHeight: 500,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px"
  },
  jsonCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 275,
    height: "fit-content",
    maxHeight: 500
  }
}));

export function HomePage() {
  const classes = useStyles();

  const [response, setResponse] = React.useState(false);
  const [waiting, setWaiting] = React.useState(false);
  const [init, setInit] = React.useState(true);

  const sendQuery = () => {
    let query = document.getElementById("queryText").value;
    if (query.length === 0) {
      return;
    }
    let sampleReq = new XMLHttpRequest();
    let responseJSON = "";
    let baseUrl = "https://api.smashultimate.ca/";
    let url = baseUrl + query;

    sampleReq.open("GET", url, true);
    sampleReq.onload = function() {
      responseJSON = JSON.parse(this.response);
      responseJSON = JSON.stringify(responseJSON, undefined, 4);
      setResponse(responseJSON);
      setWaiting(false);
    };
    sampleReq.onreadystatechange = () => {
      if (sampleReq.readyState === 4) {
        //if complete
        if (sampleReq.status === 200) {
          //check if "OK" (200)
          //success
        } else {
          setWaiting(false);
          setResponse("404 page not found");
        }
      }
    };
    setWaiting(true);
    setResponse(false);
    sampleReq.send();
  };

  /*
    let sampleReq = new XMLHttpRequest();
    let responseJSON = "";

    sampleReq.open("GET", "https://api.smashultimate.ca/moves", true);
    sampleReq.onload = function() {
        responseJSON = JSON.parse(this.response);
        responseJSON = JSON.stringify(responseJSON, undefined, 4);
        setResponse(responseJSON);
    };
    sampleReq.send();
*/
  let test = "";
  let test2 = "";
  if (response) {
    test = response;
    /*test2 = (
            <textarea
                className={classes.jsonArea}
                style={{ disabled: "true" }}
                name=""
                id="myTextarea"
                cols="30"
                rows="10"
                value={test}
                readOnly
                disabled={true}
            ></textarea>
        );
        */

    test2 = (
      <textarea
        label="Result"
        className={classes.jsonArea}
        value={test}
      ></textarea>
    );
  }

  let wait = "";
  if (waiting) {
    wait = <CircularProgress />;
  }

  if (init) {
    let sampleReq = new XMLHttpRequest();
    let responseJSON = "";

    test = require("../custom/homepage.json");
    /* test2 = (
            <textarea
                className={classes.jsonArea}
                style={{ disabled: "true" }}
                name=""
                id="myTextarea"
                cols="30"
                rows="10"
                value={test}
                readOnly
                disabled={true}
            ></textarea>    
        );
        */

    test2 = (
      <textarea
        label="Result"
        className={classes.jsonArea}
        value={test}
      ></textarea>
    );

    setResponse(JSON.stringify(test, undefined, 4));
    setInit(false);
  }
  return (
    <div className={classes.body}>
      <div className={classes.queryCont}>
        <div className={classes.query}>https://api.smashultimate.ca/</div>
        <TextField
          id="queryText"
          label="sampleEndpoint"
          variant="standard"
          defaultValue="moves"
        ></TextField>
        <Button
          onClick={sendQuery}
          style={{ marginLeft: "10px" }}
          variant="contained"
        >
          Confirm
        </Button>
      </div>
      <div className={classes.jsonCont}>
        <Card className={classes.root}>
          <CardContent className={classes.root}>
            {test2}
            {wait}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
