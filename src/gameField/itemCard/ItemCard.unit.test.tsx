import { Card, CardContent, Typography } from "@material-ui/core"
import { ItemCard } from "./ItemCard"
import { mount } from "enzyme"
import { CardType } from "../types"
import React from "react"

const mockProps: CardType = {
    name: 'testName',
    parameter: 1
}

describe('ItemCard unit test', () => {
    it('should render correctly', () => {
        const wrapper = mount(<ItemCard data={mockProps} />)
        expect(wrapper.find(Card).length).toEqual(1)
        expect(wrapper.find(CardContent).length).toEqual(1)
        expect(wrapper.find(Typography).length).toEqual(2)
    })
})