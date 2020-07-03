import Button from "@material-ui/core/Button";
import CardStack from "./CardStack";
import React, {useState} from "react";
import {getRandomCard} from "../utils/cardUtils";

export default function PlayerOne({allCards}) {

    const [cardStack, setCardStack] = useState([])

    function addCardOnStack() {
        const singleCard = getRandomCard(allCards)
        let newCardStack = cardStack.concat(singleCard)
        setCardStack(newCardStack)
    }


    return (
            <>
            <CardStack addCardOnStack={addCardOnStack} cardStack={cardStack} restartDeck={() => setCardStack([])}/>
            </>
    )
}

