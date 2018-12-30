import * as React from 'react';
import Counter from './Counter';

import './CounterList.css';

interface ICounter {
  color: string;
  number: number;
}

interface ICounterList {
  counters: ICounter[];
  onIncrement(): void;
  onDecrement(): void;
  onSetColor(): void;
}

const CounterList: React.StatelessComponent<ICounterList> = ({
  counters,
  onIncrement,
  onDecrement,
  onSetColor,
}) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
};

CounterList.defaultProps = {
  counters: [],
  onDecrement: () => console.warn('onDecrement not defined'),
  onIncrement: () => console.warn('onIncrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

export default CounterList;
