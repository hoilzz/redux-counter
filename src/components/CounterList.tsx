import * as React from 'react';
import Counter from './Counter';
import { ICounter } from '../reducers';

import './CounterList.css';

interface ICounterList {
  counters: ICounter[];
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  onSetColor: ({ index, color }: { index: number; color?: string }) => void;
}

const CounterList: React.StatelessComponent<ICounterList> = ({
  counters,
  onIncrement,
  onDecrement,
  onSetColor,
}) => {
  console.log('...counters[0]', { ...counters[0] });
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
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
