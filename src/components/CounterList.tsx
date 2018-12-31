import * as React from 'react';
import Counter from './Counter';
import { ICounter } from '../reducers';
import { actionCreators as counterActions } from '../actions';

import './CounterList.css';

interface ICounterList {
  counters: ICounter[];
  CounterActions: typeof counterActions;
}

const CounterList: React.StatelessComponent<ICounterList> = ({
  counters,
  CounterActions,
}) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={CounterActions.increment}
      onDecrement={CounterActions.decrement}
      onSetColor={CounterActions.setColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
};

// CounterList.defaultProps = {
//   counters: [],
//   CounterActions: {
//     decrement: () => console.warn('onDecrement not defined'),
//     increment: () => console.warn('onIncrement not defined'),
//     setColor: () => console.warn('onSetColor not defined'),
//   },
// };

export default CounterList;
