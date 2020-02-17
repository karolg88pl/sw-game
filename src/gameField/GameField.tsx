import React, { useState, useEffect } from "react"
import { ModeTypes } from "../App"
import { PlayerBoard } from "./playerBoard"
import * as Styles from './styles'
import { Button } from "@material-ui/core"
import { Players, CardType, Winner } from "./types"
import { ItemCard } from "./itemCard"
import { getValuesFromResponse, getRandomId, getWinner } from "./utils"

type Props = {
    mode: ModeTypes
}

export const GameField: React.FC<Props> = ({ mode }) => {
    
    const urlKeysMap = new Map<ModeTypes, string>([
        [ModeTypes.PEOPLE, 'people'],
        [ModeTypes.STARSHIPS, 'starships']
    ])
    
    const [card1, setCard1] = useState<CardType | null>(null)
    const [card2, setCard2] = useState<CardType | null>(null)
    const [winner, setWinner] = useState<Winner | null>(null)
    const [counter, setCounter] = useState({
        [Players.PLAYER_1]: 0,
        [Players.PLAYER_2]: 0
    })

    useEffect(() => {
        resetState()
    }, [mode])

    useEffect(() => {
        getScore(card1, card2)
    }, [card1, card2])

    useEffect(() => {
        winner !== 'DRAW' && winner !== null && setCounter({
            ...counter,
            [winner]: counter[winner]+1
        })
    }, [winner])

    const resetState = (): void => {
        setCard1(null)
        setCard2(null)
        setWinner(null)
    }

    const getScore = (card1: CardType | null, card2: CardType | null): void => {
        card1 !== null && card2 !== null && setWinner(getWinner(card1, card2))
    }

    const getRandomItem = (player: Players, mode: ModeTypes) => () => {
        fetch('https://cors-anywhere.herokuapp.com/'+`https://swapi.co/api/${urlKeysMap.get(mode)}/${getRandomId(mode)}/`)
        .then(res => res.json())
        .then(res => player === Players.PLAYER_1 ?
            setCard1(getValuesFromResponse(res, mode)) :
            setCard2(getValuesFromResponse(res, mode))
        )
        .catch(err => console.log(err))
    }

    return (
        <Styles.Wrapper>
            <Styles.PlayerSectionWrapper>
                <PlayerBoard 
                    getRandomItem={getRandomItem} 
                    player={Players.PLAYER_1} 
                    mode={mode}
                    score={counter[Players.PLAYER_1]}
                >
                    Player 1
                </PlayerBoard>
                <PlayerBoard 
                    getRandomItem={getRandomItem} 
                    player={Players.PLAYER_2} 
                    mode={mode}
                    score={counter[Players.PLAYER_2]}
                >
                    Player 2
                </PlayerBoard>
            </Styles.PlayerSectionWrapper>
            <Styles.CardSectionWrapper>
                <Styles.CardWrapper>
                    {card1 !== null && <ItemCard data={card1} />}
                </Styles.CardWrapper>
                <Styles.CardWrapper>
                    {card2 !== null && <ItemCard data={card2} />}
                </Styles.CardWrapper>
            </Styles.CardSectionWrapper>
            <Styles.WinnerWrapper>
                {winner && <Styles.Winner>Winner: {winner}</Styles.Winner>}
            </Styles.WinnerWrapper>
            <Button onClick={resetState} color='secondary'>Play again</Button>
        </Styles.Wrapper>
    )
}