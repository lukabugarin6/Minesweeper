import React, { useContext, useEffect } from "react";

import { FaBomb } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import {AiFillFire} from 'react-icons/ai'

import { dispatchContext, stateContext } from "../App";
import { BoardActions } from "../actions/BoardActions";

const Cell = (props) => {
  const dispatch = useContext(dispatchContext);
  const { gameClear ,gameOver, level, clickNumber, minesLeft } = useContext(stateContext);

  let {
    hasMine,
    isUncovered,
    numMinesAround,
    row,
    column,
    flagged,
  } = props.cellInfo;

  useEffect(()=> {
    if(isUncovered && hasMine) dispatch({ type: BoardActions.GAME_OVER });
  }, [isUncovered, dispatch, hasMine])

  const onCellClick = () => {
    if (flagged || gameOver || gameClear) return;
    if (clickNumber === 0) {
      dispatch({
        type: BoardActions.INITIATE_BOARD,
        payload: { level, row, column },
      });
    }
    dispatch({ type: BoardActions.UNCOVER_CELL, payload: { row, column }});
  };

  const onCellDoubleClick = () => {
    if (gameOver) return;
    dispatch({ type: BoardActions.DOUBLE_CLICK_CELL, payload: { row, column }})
  }

  const onCellRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(gameOver || isUncovered || gameClear || (!flagged && minesLeft <= 0)) return;
    dispatch({type:BoardActions.RIGHT_CLICK_CELL, payload: { row, column }});
    return false;
  }



  return (
    <>
      <div
        className={`cell text-quinary ${isUncovered ? 'bg-secondary uncovered' : 'cursor-pointer hover:bg-quinary hover:text-primary' } inline-flex justify-center items-center`}
        onClick={onCellClick}
        onDoubleClick={onCellDoubleClick}
        onContextMenu={(e) => onCellRightClick(e)}
      >
        {/* { && <FaBomb />} */}
        { hasMine && gameOver && !isUncovered ? <span className='bomb text-xl text-quinary'><FaBomb /></span>  : null}
        { (hasMine && isUncovered) ? <span className='boom text-red-400 text-2xl'><AiFillFire /></span> : null}
        {(flagged && !gameOver ) ? <span className='flag text-2xl'><BsFlagFill /></span>  : ''}
        {(numMinesAround && !hasMine && isUncovered) ? <span className={`number-${numMinesAround} text-lg font-semibold`}>{numMinesAround}</span> : ''}
      </div>
      <style jsx>{`
        .cell {
          transition: all:
          transition-duration: 200ms;
          border-top: 1px solid #D9B08C;
          border-left: 1px solid #D9B08C;
          border-right: 1px solid #D9B08C;
          border-bottom: 1px solid #D9B08C;
        }
        .cell.uncovered {
          transition: all;
          transition-duration: 550ms;
          border: 1px solid #D1E8E2;
        }

      `}</style>
    </>
  );
};

export default Cell;
