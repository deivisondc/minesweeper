export const actionTypes = {
  INITIALIZE: 'INITIALIZE',
  REVEAL_CELL: 'REVEAL_CELL',
  FLAG_CELL: 'FLAG_CELL',
  VICTORY: 'VICTORY',
  GAME_OVER: 'GAME_OVER',
}

const populateMines = (rows, columns, mineCount) => {
  const minesCoord = [];

  while (minesCoord.length < mineCount) {
    const min = 0;
    const maxRow = Math.floor(rows - 1);
    const maxColumn = Math.floor(columns - 1);
    
    const rowSelected = Math.floor(Math.random() * (maxRow - min + 1)) + min;
    const columnSelected = Math.floor(Math.random() * (maxColumn - min + 1)) + min;

    const isAvailable = minesCoord.filter(mine => {
      return mine.row === rowSelected && mine.column === columnSelected;
    }).length === 0;

    if (isAvailable) {
      minesCoord.push({ row: rowSelected, column: columnSelected});
    }
  }

  return minesCoord;
}

const countNearbyBombs = (row, column, minesCoord) => {
  let count = 0;

  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let columnOffset = -1; columnOffset <= 1; columnOffset++) {
      if (minesCoord.filter(f => f.row === row + rowOffset && f.column === column + columnOffset).length) {
        count++;
      }
    }
  }

  return count;
}

const populateGrid = (rows, columns, minesCoord) => {
  return [...Array(rows).keys()].map(row => {
    return [...Array(columns).keys()].map(column => (
      {
        row,
        column,
        bomb: minesCoord.filter(mineCoord => mineCoord.row === row && mineCoord.column === column).length > 0,
        nearbyBombCounter: countNearbyBombs(row, column, minesCoord),
        revealed: false,
        flagged: false,
      }
    ));
  })
}

const initialize = ({ rows, columns, mineCount }) => {
  const minesCoord = populateMines(rows, columns, mineCount);

  const grid = populateGrid(rows, columns, minesCoord);

  return {
    type: actionTypes.INITIALIZE,
    payload: {
      config: {
        rows,
        columns,
        mineCount
      },
      minesweeper: grid,
      safeCells: (rows * columns) - mineCount
    }
  }
};

const revealCell = (row, column) => {
  return {
    type: actionTypes.REVEAL_CELL,
    payload: { row, column }
  }
};

const flagCell = (row, column) => {
  return {
    type: actionTypes.FLAG_CELL,
    payload: { row, column }
  }
};

const victory = () => {
  return {
    type: actionTypes.VICTORY,
  }
};

const gameOver = () => {
  return {
    type: actionTypes.GAME_OVER,
  }
};

export {
  initialize,
  revealCell,
  flagCell,
  victory,
  gameOver
}