import * as React from 'react';
import './Counter.css';

interface ICounter {
  index: number;
  number: number;
  color: string;
  onIncrement({ index }: { index: number }): void;
  onDecrement({ index }: { index: number }): void;
  onSetColor({ index, color }: { index: number; color?: string }): void;
}

const Counter: React.StatelessComponent<ICounter> = ({
  number,
  color,
  index,
  onIncrement,
  onDecrement,
  onSetColor,
}) => {
  const handleClick: () => void = () => onIncrement({ index });
  const handleContextMenu: (e: React.FormEvent<HTMLDivElement>) => void = e => {
    console.log('handleContextMenu');
    e.preventDefault();
    onDecrement({ index });
  };
  const handleDoubleClick: () => void = () => onSetColor({ index });

  return (
    <div
      className="Counter"
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

Counter.defaultProps = {
  color: 'black',
  index: 0,
  number: 0,
  onDecrement: () => console.warn('onDecrement not defined'),
  onIncrement: () => console.warn('onIncrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter;
