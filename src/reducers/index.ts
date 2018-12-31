import * as types from '../actions/ActionTypes';
import { Action } from '../actions/';

export interface ICounter {
  color: string;
  number: number;
}

export interface IState {
  readonly counters: ICounter[];
}

const initialState: IState = {
  counters: [
    {
      color: 'black',
      number: 0,
    },
  ],
};

function counter(state = initialState, action: Action): IState {
  const { counters } = state;

  switch (action.type) {
    // 카운터를 새로 추가합니다
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0,
          },
        ],
      };
    // slice 를 이용하여 맨 마지막 카운터를 제외시킵니다
    case types.REMOVE:
      const size = counters.length;
      return {
        counters: counters.slice(size - 1, size),
      };

    // action.index 번째 카운터의 number 에 1 을 더합니다.
    case types.INCREMENT:
      console.log('incermetn');
      counters[action.index].number += 1;
      return {
        counters,
      };

    // action.index 번째 카운터의 number 에 1 을 뺍니다
    case types.DECREMENT:
      counters[action.index].number -= 1;
      return {
        counters,
      };

    // action.index 번째 카운터의 색상을 변경합니다
    case types.SET_COLOR:
      if (action.color) {
        counters[action.index].color = action.color;
      }
      return {
        counters,
      };
    default:
      return state;
  }
}

export default counter;
