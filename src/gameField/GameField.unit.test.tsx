import { mount } from "enzyme"
import { GameField } from "./GameField"
import { ModeTypes } from "../App"
import React from "react"
import * as Styles from './styles'
import { PlayerBoard } from "./playerBoard"

const wrapper = mount(<GameField mode={ModeTypes.PEOPLE} />)

describe('GameField unit test', () => {
    it('should render properly all elements', () => {
        expect(wrapper.find(Styles.Wrapper).length).toEqual(1)
        expect(wrapper.find(Styles.PlayerSectionWrapper).length).toEqual(1)
        expect(wrapper.find(Styles.CardSectionWrapper).length).toEqual(1)
        expect(wrapper.find(Styles.WinnerWrapper).length).toEqual(1)
        expect(wrapper.find(PlayerBoard).length).toEqual(2)
        expect(wrapper.find(Styles.CardWrapper).length).toEqual(2)
    })
})