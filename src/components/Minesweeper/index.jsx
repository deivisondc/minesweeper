import { useState, useEffect } from 'react';

import Cell from './Cell';

import { Container, Row } from './styles';

function Minesweeper({ columns, rows, mineCount }) {
  const [grid, setGrid] = useState([]);
  const [minesCoord, setMinesCoord] = useState([]);

  useEffect(() => {
    setGrid([...Array(rows).keys()].map(row => {
      return [...Array(columns).keys()].map(column => (
        {
          row,
          column,
        }
      ));
    }));
  }, [columns, rows]);

  useEffect(() => {
    const tempMinesCoord = [];

    while (tempMinesCoord.length < mineCount) {
      const min = 0;
      const maxRow = Math.floor(rows - 1);
      const maxColumn = Math.floor(columns - 1);
      
      const rowSelected = Math.floor(Math.random() * (maxRow - min + 1)) + min;
      const columnSelected = Math.floor(Math.random() * (maxColumn - min + 1)) + min;

      const isAvailable = tempMinesCoord.filter(mine => {
        return mine.row === rowSelected && mine.column === columnSelected;
      }).length === 0;

      if (isAvailable) {
        tempMinesCoord.push({ row: rowSelected, column: columnSelected});
      }
    }

    setMinesCoord(tempMinesCoord)
  }, [columns, rows, mineCount])

  const nearbyBomb = ({ row, column }) => {
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
  
  const isBomb = ({ row, column }) => {
    return minesCoord.filter(f => f.row === row && f.column === column).length;
  }

  const isRevealed = ({ row, column }) => {
    return false;
  }

  const handleOnClick = ({ row, column }) => {
    
  }

  const revealNearby = ({ row, column }) => {

  }

  const finishGame = ({ row, column }) => {

  }

  return (
    <Container>
      {
        grid.map((coordinates, index) => (
          <Row key={coordinates[index].row}>
            {coordinates.map(({row, column}) => (
              <Cell 
                key={`${row}-${column}`}
                revealed={isRevealed({ row, column })}
                number={nearbyBomb({ row, column })}
                isBomb={isBomb({ row, column })} />
            ))}
          </Row>
        ))
      }
    </Container>
  );
}

export default Minesweeper;