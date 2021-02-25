import React, { useContext } from "react";

import { FaBomb } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";

import { dispatchContext, stateContext } from "../App";
import { BoardActions } from "../actions/BoardActions";

const Cell = (props) => {
  const dispatch = useContext(dispatchContext);
  const { gameOver, level, clickNumber } = useContext(stateContext);
  const state = useContext(stateContext);
  const test = useContext(stateContext);
  let {
    hasMine,
    isUncovered,
    numMinesAround,
    row,
    column,
    flagged,
  } = props.cellInfo;

  const onCellClick = () => {
    console.log(hasMine)
    if (clickNumber === 0) {
      dispatch({
        type: BoardActions.INITIATE_BOARD,
        payload: { level, row, column },
      });
    }
  };

  return (
    <>
      <div
        className="cell inline-flex justify-center items-center"
        onClick={onCellClick}
      >
        {/* { && <FaBomb />} */}
        {hasMine && <FaBomb />}
        {flagged && <BsFlagFill />}
        {(numMinesAround && !hasMine) ? numMinesAround : ''}
      </div>
      <style jsx>{`
        .cell {
          border-top: 2px solid black;
          border-left: 2px solid black;
          border-right: 2px solid yellow;
          border-bottom: 2px solid yellow;
        }
      `}</style>
    </>
  );
};

export default Cell;
