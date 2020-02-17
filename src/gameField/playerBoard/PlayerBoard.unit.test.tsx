import { PlayerBoard } from "./PlayerBoard"
import { mount } from "enzyme"
import React from "react"
import { Players } from "../types"
import { ModeTypes } from "../../App"
import { Button } from "@material-ui/core"
import * as Styles from './styles'

describe('PlayerBoard unit test', () => {
    it('should render correctly', () => {
        const mockFn = jest.fn()
        const wrapper = mount(<PlayerBoard 
                                getRandomItem={() => mockFn} 
                                player={Players.PLAYER_1}
                                mode={ModeTypes.PEOPLE}
                                score={1} />)
        expect(wrapper.find(Styles.PLayerBoardWrapper).length).toEqual(1)
        expect(wrapper.find(Button).length).toEqual(1)

        wrapper.find(Button).at(0).simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
})