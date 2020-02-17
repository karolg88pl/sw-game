import { ModeTypes } from "../App"
import { CardType, Players, Winner } from "./types"

export const getValuesFromResponse = (data: any, mode: ModeTypes): CardType => {

    const keysMap = new Map<ModeTypes, string>([
        [ModeTypes.PEOPLE, 'mass'],
        [ModeTypes.STARSHIPS, 'crew']
    ])

    const param = data[keysMap.get(mode)!]
    return {
        name: data.name,
        parameter: param !== 'unknown' ? parseInt(param) : 0
    }
}

export const getRandomId = (mode: ModeTypes): number => {

    const idsMap = new Map<ModeTypes, number>([
        [ModeTypes.PEOPLE, 87],
        [ModeTypes.STARSHIPS, 37]
    ])

    return Math.floor(Math.random() * idsMap.get(mode)!) + 1
}

export const getWinner = (card1: CardType, card2: CardType): Winner => {
    if (card1.parameter === card2.parameter) return 'DRAW'
    else {
        return card1.parameter > card2.parameter ? Players.PLAYER_1 : Players.PLAYER_2
    }
}