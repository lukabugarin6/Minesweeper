import React, { useReducer } from "react";

import "./App.css";

import Board from "./components/Board";
import CustomSelect from './components/CustomSelect';

import { boardReducer } from "./reducers/boardReducer";
import { GameLevel, GameInitialState } from "./constants/gameConstants";
import { BoardActions } from "./actions/BoardActions";

import { RiRestartFill } from "react-icons/ri";

export const stateContext = React.createContext();
export const dispatchContext = React.createContext();

const levels = [{name: 'Easy',value: GameLevel.EASY.name} , {name:'Intermediate',value:GameLevel.INTERMEDIATE.name}, {name: 'Expert', value:GameLevel.EXPERT.name}]

function App() {
  const [state, dispatch] = useReducer(boardReducer, GameInitialState);

  const onResetClick = () => {
    dispatch({
      type: BoardActions.INITIATE_DUMMY_BOARD,
      payload: { level: state.level },
    });
  };

  function onLevelSelect(value) {
    dispatch({
      type: BoardActions.CHANGE_LEVEL,
      payload: { level: GameLevel[value] },
    });
  }

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <div></div>
        <div className="bg-primary min-h-screen pt-20 md:pt-32 lg:pt-24 2xl:pt-40 text-center">
          <div className="uppercase font-medium text-5xl lg:text-6xl text-quinary">
            minesweeper
          </div>
          <div></div>
          <div className="w-full pt-8 md:pt-10 lg:pt-12 text-quinary">
            <div className="flex mb-8 md:mb-10 lg:mb-12 mx-auto w-80 lg:w-96 justify-around items-center">
              <div className="text-xs lg:text-sm border-1 w-24 lg:w-28 border-quinary  rounded-lg px-1 py-2 lg:px-1.5 lg:py-2.5">Mines left : {state.minesLeft}</div>
              <div className='flex items-center gap-x-1'>
                <button
                  className="transition-all duration-1000 bg-transparent border-2 border-secondary text-secondary hover:text-quaternary hover:border-quaternary p-1 text-2xl lg:text-3xl rounded-lg"
                  onClick={onResetClick}
                >
                  <RiRestartFill />
                </button>
                <CustomSelect defText='Easy' onLevelSelect={onLevelSelect} state={state} optList={levels} />
                {/* <select
                  className="text-secondary"
                  value={state.level.name}
                  onChange={(e) => onLevelSelect(e)}
                >
                  <option value={GameLevel.EASY.name}>Easy</option>
                  <option value={GameLevel.INTERMEDIATE.name}>
                    Intermediate
                  </option>
                  <option value={GameLevel.EXPERT.name}>Expert</option>
                </select> */}
              </div>
            </div>
            <Board />
          </div>
        </div>
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;
