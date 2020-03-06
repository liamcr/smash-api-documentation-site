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
    withStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    cont: {}
});

export function HomeHeader() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div id="ass" className={classes.cont}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h3" color="textPrimary" gutterBottom>
                        Smash Ultimate API
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Welcome to the Smash Ultimate API
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary"></Typography>
                    <Typography variant="body2" component="p">
                        Try it below!
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="/docs" size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
