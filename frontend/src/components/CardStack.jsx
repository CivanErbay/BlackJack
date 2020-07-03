import Grid from "@material-ui/core/Grid";
import BJCard from "./BJCard";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function CardStack ({cardStack}) {
    const classes = useStyles();
    return (
        <Grid container wrap className={classes.root}>
            {cardStack && cardStack.map(singleCard => <Grid item sm> <BJCard singleCard={singleCard}/> </Grid>)}
        </Grid>
    )

}

