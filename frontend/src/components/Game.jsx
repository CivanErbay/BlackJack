import React, {useEffect,useState} from "react";
import {fetchCards} from "../utils/api";
import {getRandomCard} from "../utils/cardUtils";
import Button from "@material-ui/core/Button";
import NetworkState from "./NetworkState";
import CardStack from "./CardStack";



export default function Game() {


    const [allCards, setAllCards] = useState([])
    const [cardStack, setCardStack] = useState([])

    const [networkState, setNetworkState] = useState("IDLE")


    useEffect(() => {
        setNetworkState("LOADING")
        fetchCards().then(response => {
            if (response) {
                const newCards = response.map(card => {
                    return {...card}
                })
                setAllCards(newCards)
                setNetworkState("SUCCESS")
            }
            else {
                setNetworkState("ERROR")
            }
        }).catch(()=> setNetworkState("ERROR"))
    },[])

    function addCardOnStack() {
        const singleCard = getRandomCard(allCards)
        let newCardStack = cardStack.concat(singleCard)
        setCardStack(newCardStack)
    }
    return (

        <div style={{
            textAlign:'center', // this does the magic
        }}>
            <NetworkState networkState={networkState}/>
            <Button style={{minHeight: 75, minWidth: 75, marginTop: "0.5em"}} variant="contained" color="secondary" onClick={addCardOnStack}>Get a Card</Button>
            <CardStack cardStack={cardStack}/>
        </div>
    )
}