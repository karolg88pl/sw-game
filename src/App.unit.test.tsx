import { shallow } from 'enzyme'
import * as Styles from './styles'
import App, { ModeTypes } from './App'
import React from 'react'
import { Button } from '@material-ui/core'
import { GameField } from './gameField'

describe('App unit test', () => {
    it('should render ButtonsWrapper, GameField and 2 Buttons', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Styles.ButtonsWrapper).length).toEqual(1)
        expect(wrapper.find(GameField).length).toEqual(1)
        expect(wrapper.find(Button).length).toEqual(2)
    })

    it('should change mode', () => {
        const wrapper = shallow(<App />)
        wrapper.find(Button).last().simulate('click')
        expect(wrapper.find(GameField).props()).toEqual({mode: ModeTypes.STARSHIPS})
        wrapper.find(Button).first().simulate('click')
        expect(wrapper.find(GameField).props()).toEqual({mode: ModeTypes.PEOPLE})
    })
})