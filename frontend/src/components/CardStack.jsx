import Grid from "@material-ui/core/Grid";
import BJCard from "./BJCard";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    position: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    message: {
        fontSize: "2em"
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

        <div className={classes.position}>

        {numberState < 21 && <Button style={{minHeight: 75, minWidth: 75, marginTop: "0.5em"}} variant="contained" color="secondary"
                   onClick={addCardOnStack}>Get a Card</Button>}
            {numberState >= 21 && <Button style={{minHeight: 75, minWidth: 75, marginTop: "0.5em"}} variant="contained" color="secondary"
                                         onClick={restartGame}>Restart</Button> }

            <Grid container className={classes.root}>
                {cardStack.map(singleCard => <Grid className={classes.item} item sm> <BJCard singleCard={singleCard}/>
                </Grid>)}
            </Grid>
            {numberState === 21 && <h3 className={classes.message}>BLACKJACK!!!</h3>}
            {numberState > 21 && <h3 className={classes.message}>GAME OVER</h3>}
        </div>

    )

}

