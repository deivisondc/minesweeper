import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initialize, victory } from '../../store/actions/minesweeperActions';

import Cell from './Cell';

import { Container, Row } from './styles';

function Minesweeper({ columns, rows, mineCount }) {
  const dispatch = useDispatch();

  const { minesweeper, safeCells, status } = useSelector((store) => store.minesweeperReducer);

  useEffect(() => {
    if (rows && columns && mineCount) {
      const maxCells = rows * columns;
      const mineCountVerified = mineCount > maxCells ? maxCells : mineCount;
      dispatch(initialize({ rows, columns, mineCount: mineCountVerified }));
    }
  }, [dispatch, rows, columns, mineCount]);
  
  useEffect(() => {
    if (status === 'playing' && safeCells === 0) {
      dispatch(victory())
    }
  }, [safeCells, status, dispatch])

  return (
    <Container>
      {
        minesweeper.map((row, index) => (
          <Row key={`row-${index}`}>
            {row.map((cellData) => (
              <Cell 
                key={`${cellData.row}-${cellData.column}`}
                cellData={cellData} />
            ))}
          </Row>
        ))
      }
    </Container>
  );
}

export default Minesweeper;