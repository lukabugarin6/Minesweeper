import React, { useEffect, useContext } from "react";

import Cell from "./Cell";

import { stateContext, dispatchContext } from "../App";
import { BoardActions } from "../actions/BoardActions";

import { GameLevel } from "../constants/gameConstants";

const Board = () => {
  const state = useContext(stateContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    dispatch({
      type: BoardActions.INITIATE_DUMMY_BOARD,
      payload: { level: GameLevel.EASY },
    });
  }, [dispatch]);

  return (
    <div className="relative overflow-y-hidden">
      <h1
        className={`text-red-400 font-bold transition-all duration-1000 transform ${
          state.gameOver
            ? "opacity-100 translate-y-24"
            : "opacity-0 translate-y-96"
        } text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl absolute -top-0 left-1/2 transform -translate-x-1/2`}
        style={{ pointerEvents: "none" }}
      >
        GAME OVER
      </h1>
      <h1
        className={`text-green-400 font-bold transition-all duration-1000 transform ${
          state.gameClear
            ? "opacity-100 translate-y-24"
            : "opacity-0 translate-y-96"
        } text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl absolute -top-0 left-1/2 transform -translate-x-1/2`}
        style={{ pointerEvents: "none" }}
      >
        YOU WON
      </h1>
      <div
        className="grid w-min mx-auto pb-20 px-4"
        style={{
          gridTemplateRows: `repeat(${state.level.rows}, 36px)`,
          gridTemplateColumns: `repeat(${state.level.columns}, 36px)`,
        }}
      >
        {state.board.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <Cell
                cellInfo={{
                  ...cell,
                  row: i,
                  column: j,
                }}
                key={[i, j]}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Board;
