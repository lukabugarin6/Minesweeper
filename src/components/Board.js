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
      payload: { level: GameLevel.INTERMEDIATE },
    });
  }, [dispatch]);

  return (
    <div
      className="grid bg-green-600 w-min"
      style={{
        gridTemplateRows: `repeat(${state.level.rows}, 40px)`,
        gridTemplateColumns: `repeat(${state.level.columns}, 40px)`,
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
  );
};

export default Board;
