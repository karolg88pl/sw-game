import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as Styles from './styles'
import { GameField } from './gameField'

export enum ModeTypes {
  PEOPLE = 'ModeTypes/PEOPLE',
  STARSHIPS = 'ModeTypes/STARSHIPS'
}

const App = () => {
const [mode, setMode] = useState<ModeTypes>(ModeTypes.PEOPLE)

const selectMode = (modeType: ModeTypes) => () => {
  setMode(modeType)
}

  return (
    <div className="App">
      <Styles.ButtonsWrapper>
        <Button variant={mode === ModeTypes.PEOPLE ? 'contained' : 'outlined'} color="primary" onClick={selectMode(ModeTypes.PEOPLE)}>Play people</Button>
        <Button variant={mode === ModeTypes.STARSHIPS ? 'contained' : 'outlined'} color="primary" onClick={selectMode(ModeTypes.STARSHIPS)}>Play starships</Button>
      </Styles.ButtonsWrapper>
     <GameField mode={mode}/>
    </div>
  );
}

export default App;
