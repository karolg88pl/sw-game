import { getValuesFromResponse, getRandomId, getWinner } from "./utils"
import { ModeTypes } from "../App"
import { Players } from "./types"

describe('utils unit tests', () => {
    it('test getValuesFromResponse function', () => {

        const mockData = {
            name: 'testName',
            crew: 100,
            otherProperty: 'other'
        }

        const expected = {
            name: 'testName',
            parameter: 100
        }

        expect(getValuesFromResponse(mockData, ModeTypes.STARSHIPS)).toStrictEqual(expected)

        const mockData2 = {
            name: 'testName',
            mass: 'unknown',
            otherProperty: 'other'
        }

        const expected2 = {
            name: 'testName',
            parameter: 0
        }

        expect(getValuesFromResponse(mockData2, ModeTypes.PEOPLE)).toStrictEqual(expected2)
    })

    it('test getRandomId function', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
        expect(getRandomId(ModeTypes.PEOPLE)).toEqual(88)
    })

    it('test getWinner function', () => {
        const mockCard1 = {
            name: 'testName1',
            parameter: 8
        }
        const mockCard2 = {
            name: 'testName2',
            parameter: 14
        }

        expect(getWinner(mockCard1, mockCard2)).toEqual(Players.PLAYER_2)
    })
})