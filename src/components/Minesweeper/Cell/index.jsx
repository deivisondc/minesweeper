import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { flagCell, gameOver, revealCell } from '../../../store/actions/minesweeperActions'

import { Container, Number } from './styles';

function Cell({ cellData }) {
  const dispatch = useDispatch();
  const { minesweeper } = useSelector((store) => store.minesweeperReducer);

  useEffect(() => {
    if (cellData.revealed && cellData.nearbyBombCounter === 0) {
      for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (let columnOffset = -1; columnOffset <= 1; columnOffset++) {
          const row = cellData.row + rowOffset;
          const column = cellData.column + columnOffset;

          if ((row >= 0 && row < 5) && (column >= 0 && column < 5)) {
            if (!minesweeper[row][column].revealed && !minesweeper[row][column].flagged) {
              dispatch(revealCell(row, column));
            }
          } 
        }
      }
    } 
  }, [cellData, minesweeper, dispatch]);

  useEffect(() => {
    if (cellData.revealed && cellData.bomb) {
      dispatch(gameOver());
    }
  }, [cellData.revealed, cellData.bomb, dispatch])

  const handleLeftClick = () => {
    if (!cellData.flagged) {
      dispatch(revealCell(cellData.row, cellData.column))
    }
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!cellData.revealed) {
      dispatch(flagCell(cellData.row, cellData.column))
    }
  }

  const bombIcon = (
    <div>B</div>
  )

  const numberLabel = (
    <Number className={`cell-number-${cellData.nearbyBombCounter}`}>
      {cellData.nearbyBombCounter !== 0 && cellData.nearbyBombCounter}
    </Number>
  );

  const content = cellData.bomb ? bombIcon : numberLabel;

  return (
    <Container 
      revealed={cellData.revealed} 
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {cellData.flagged && 'F'}
      {cellData.revealed && content}
    </Container>
  );
}

export default Cell;