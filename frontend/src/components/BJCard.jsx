import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        minWidth: 100,
        minHeight: 100,
        maxWidth: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3em",
        margin: "1em"
    },
});

export default function BJCard({singleCard}) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
                    {singleCard.num}
        </Paper>
    );
}
