import React from 'react'
import * as Styles from './styles'
import Button from '@material-ui/core/Button'
import { ModeTypes } from '../../App'
import { Players } from '../types'

type Props = {
    children?: React.ReactChild
    getRandomItem: (player: Players, mode: ModeTypes) => () => void
    player: Players
    mode: ModeTypes
    score: number
}

export const PlayerBoard:React.FC<Props> = ({ children, getRandomItem, player, mode, score }) => {
    return (
        <Styles.PLayerBoardWrapper>
            {children}
        <Button variant='contained' onClick={getRandomItem(player, mode)} color='secondary'>Play</Button>
            Wins: {score} 
        </Styles.PLayerBoardWrapper>
    )
}