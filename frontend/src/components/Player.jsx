import CardStack from "./CardStack";
import React, {useContext,} from "react";
import {getRandomCard} from "../utils/cardUtils";
import {GameContext} from "./GameContext";

export default function Player({gameState, setGameState}) {

/*    const [cardStack, setCardStack] = useState([])*/
   /* const {gameState} = useContext(GameContext)*/

    function addCardOnStack() {
        const singleCard = getRandomCard(gameState.cards)
        const spliceIndex = parseInt(singleCard.id)
        gameState.cards.splice(spliceIndex,1);
        gameState.players.stack.concat(singleCard)
        console.log(gameState.players.stack)
    }


    return (
            <>
            <CardStack addCardOnStack={addCardOnStack} setGameState={setGameState} gameState={gameState} restartDeck={() => setGameState([...gameState, gameState.players.player1.stack = [], gameState.players.player2.stack = []])}/>
            </>
    )
}

