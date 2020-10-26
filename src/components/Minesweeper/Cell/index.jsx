import { useState, useEffect } from 'react';

import { Container, Number } from './styles';

function Cell({ isBomb, number, revealed }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);

  useEffect(() => {
    setIsRevealed(revealed || false)
  }, [revealed]);

  const bombIcon = (
    <div>B</div>
  )

  const numberLabel = (
    <Number className={`cell-number-${number}`}>
      {number !== 0 && number}
    </Number>
  );

  const content = isBomb ? bombIcon : numberLabel;

  return (
    <Container 
      revealed={isRevealed} 
      onClick={() => setIsRevealed(isFlagged ? false : true)}
      onContextMenu={(e) => {e.preventDefault(); setIsFlagged(!isFlagged) }}
    >
      {isFlagged && 'F'}
      {isRevealed && content}
    </Container>
  );
}

export default Cell;