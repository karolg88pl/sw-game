import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const PlayerSectionWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 200px;
`

export const CardSectionWrapper = styled(PlayerSectionWrapper)`
    height: 100px;
`

export const CardWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
`

const blinking = keyframes`
  0% { background-color: transparent; }
  50% { background-color: green; }
  100% { background-color: transparent; }
`

export const Winner = styled.div`
    animation: ${blinking} 1s infinite;
    font-size: 32px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const WinnerWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
`