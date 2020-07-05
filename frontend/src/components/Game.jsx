import React, {useEffect,useState} from "react";
import {fetchCards} from "../utils/api";
import NetworkState from "./NetworkState";
import Player from "./Player";
import {GameContext} from "./GameContext";
import Button from "@material-ui/core/Button";



export default function Game() {


/*    const [allCards, setAllCards] = useState([])*/
    const [networkState, setNetworkState] = useState("IDLE")
    const [gameState, setGameState] = useState({cards: [], players: {player1 : {name: "Player1", points: 0, stack: []}, player2: {name: "Player2", points: 0, stack: []}}})

    useEffect(() => {
        setNetworkState("LOADING")
        fetchCards().then(response => {
            if (response) {
                const newCards = response.map(card => {
                    return {...card}
                })
                setGameState(() => { return {...gameState, cards: newCards}});
                setNetworkState("SUCCESS")
            }
            else {
                setNetworkState("ERROR")
            }
        }).catch(()=> setNetworkState("ERROR"))
    },[])

    console.log(gameState)
    return (

        <div style={{
            textAlign:'center', // this does the magic
        }}>
            <NetworkState networkState={networkState}/>
            <GameContext.Provider value={{gameState, setGameState}}>
                {gameState.players.map(() =>
                    <Player gameState={gameState} setGameState={setGameState}/>)}
                }
                })
            <Button>Draw Card</Button>
            </GameContext.Provider>
        </div>
    )
}