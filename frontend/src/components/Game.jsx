import React, {useEffect, useState} from "react";
import BJCard from "./BJCard";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {fetchCards} from "../utils/api";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%"
    }
}));

export default function Game() {
    const classes = useStyles();

    const [cards, setCards] = useState([])
    const [networkState, setNetworkState] = useState("IDLE")

    useEffect(() => {
        setNetworkState("LOADING")
        fetchCards().then(response => {
            if (response) {
                const cards = response.map(card => {
                    return {...card}
                })
                setCards(cards)
                setNetworkState("SUCCESS")
            }
            else {
                setNetworkState("ERROR")
            }
        })
    },[])

    return (

        <div className={classes.root}>

            {networkState === "LOADING" && <h3>Loading...</h3>}

            {networkState === "ERROR" && <h3>Error</h3>}

            {networkState === "SUCCESS" &&  <Grid container> {cards.map(singleCard => <Grid item xs><BJCard singleCard={singleCard}/> </Grid>)}  </Grid>}

        </div>
    )
}