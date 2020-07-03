import React, {useEffect, useState} from "react";
import BJCard from "./BJCard";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {fetchCards} from "../utils/api";
import {getRandomCard} from "../utils/cardUtils";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function Game() {
    const classes = useStyles();

    const [cards, setCards] = useState([])
    const [currentCard, setCurrentCard] = useState(null)
    const [networkState, setNetworkState] = useState("IDLE")


    useEffect(() => {
        setNetworkState("LOADING")
        fetchCards().then(response => {
            if (response) {
                const newCards = response.map(card => {
                    return {...card}
                })
                setCards(newCards)
                setNetworkState("SUCCESS")
            }
            else {
                setNetworkState("ERROR")
            }
        }).catch(()=> setNetworkState("ERROR"))
    },[])

    function renderCurrentCard() {
        const singleCard = getRandomCard(cards)
        setCurrentCard(singleCard)
    }




    return (

        <div className={classes.root}>

            {networkState === "LOADING" && <h3>Loading...</h3>}

            {networkState === "ERROR" && <h3>Error</h3>}

            <Grid container>

                <Button onClick={renderCurrentCard}>Get a Card</Button>

                {currentCard && <BJCard singleCard={currentCard}/> }

            </Grid>

        </div>
    )
}