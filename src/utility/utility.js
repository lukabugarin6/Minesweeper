export function getSurroundingCellIndex(row, column) {
    return [
      [row - 1, column - 1],
      [row - 1, column],
      [row - 1, column + 1],
      [row, column - 1],
      [row, column + 1],
      [row + 1, column -1],
      [row + 1, column],
      [row + 1, column + 1],
    ];
}

export function isCell(board, row, column) {
    if(row >= 0 && row < board.length && column >=0 && column < board[0].length) {
      return true;
    }
  
    return false;
  }

export function referenceToAdjacentCells(originalBoard, row, column) {
    const adjacentCells = [];
  
    const surroundingCellIndex = getSurroundingCellIndex(row, column);
  
    for(let [newRow, newColumn] of surroundingCellIndex) {
  
      if (isCell(originalBoard, newRow, newColumn)) {
        adjacentCells.push({
          cell: originalBoard[newRow][newColumn],
          row: newRow,
          column: newColumn,
        });
      }
    }
  
    return adjacentCells;
  }