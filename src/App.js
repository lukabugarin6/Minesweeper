import React, { useReducer } from "react";

import "./App.css";

import Board from './components/Board';

import { boardReducer } from "./reducers/boardReducer";
import { GameInitialState } from "./constants/gameConstants";

export const stateContext = React.createContext();
export const dispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(boardReducer, GameInitialState);

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <div className='w-full min-h-screen flex justify-center items-center'>
          <Board />
        </div>
      </dispatchContext.Provider>
    </stateContext.Provider>
  )
}

export default App;
