import React, {useEffect,useState} from "react";
import {fetchCards} from "../utils/api";
import NetworkState from "./NetworkState";
import Player from "./Player";



export default function Game() {


    const [allCards, setAllCards] = useState([])
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

    return (

        <div style={{
            textAlign:'center', // this does the magic
        }}>
            <NetworkState networkState={networkState}/>
            <Player allCards={allCards}/>
            <hr/>
            <Player allCards={allCards}/>

        </div>
    )
}