import Grid from "@material-ui/core/Grid";
import BJCard from "./BJCard";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

export default function CardStack({addCardOnStack,cardStack, restartDeck}) {
    const classes = useStyles();

    const [numberState, setNumberState] = useState(0)

    useEffect(() => {
        let counter = 0
        for (let i = 0; i < cardStack.length; i++) {
            counter = counter + cardStack[i].num
        }
        setNumberState(counter);
    }, [cardStack])

    function restartGame (){
        setNumberState(0);
        restartDeck()
    }

    return (
        <>
            {numberState <= 21 && <Button style={{minHeight: 75, minWidth: 75, marginTop: "0.5em"}} variant="contained" color="secondary"
                   onClick={addCardOnStack}>Get a Card</Button>}
            {numberState > 21 && <Button style={{minHeight: 75, minWidth: 75, marginTop: "0.5em"}} variant="contained" color="secondary"
                                         onClick={restartGame}>Restart</Button> }

            <Grid container wrap className={classes.root}>
                {cardStack.map(singleCard => <Grid className={classes.item} item sm> <BJCard singleCard={singleCard}/>
                </Grid>)}
                {numberState === 21 && <h2>BLACKJACK!!!</h2>}
                {numberState > 21 && <h2>GAME OVER</h2>}

            </Grid>
        </>
    )

}

