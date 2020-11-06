import { actionTypes } from '../actions/minesweeperActions'

const INITIAL_STATE = {
  config: {
    rows: 0,
    columns: 0,
    mineCount: 0,
  },
  minesweeper: [],
  safeCells: 0,
  status: 'idle',
}

export const minesweeperReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return {
        ...state,
        config: action.payload.config,
        minesweeper: action.payload.minesweeper,
        safeCells: action.payload.safeCells,
        status: 'playing'
      };
    case actionTypes.REVEAL_CELL:
      const updated = [...state.minesweeper];
      updated[action.payload.row][action.payload.column].revealed = true;

      return {
        ...state,
        minesweeper: updated,
        safeCells: state.safeCells - 1,
      }
    case actionTypes.FLAG_CELL:
      const updated5 = [...state.minesweeper];
      updated5[action.payload.row][action.payload.column].flagged = !updated5[action.payload.row][action.payload.column].flagged;

      return {
        ...state,
        minesweeper: state.minesweeper
      }
    case actionTypes.GAME_OVER:
      const updated2 = state.minesweeper.map(row => {
        return [...row.map(cell => Object.assign({}, cell, { revealed: true, flagged: false }))]
      });

      return {
        ...state,
        minesweeper: updated2,
        status: 'game-over',
      }
    case actionTypes.VICTORY:
      const updated3 = state.minesweeper.map(row => {
        return [...row.map(cell => Object.assign({}, cell, { revealed: true, flagged: false }))]
      });

      return {
        ...state,
        minesweeper: updated3,
        status: 'victory'
      }
    default: 
      return state;
  }
}