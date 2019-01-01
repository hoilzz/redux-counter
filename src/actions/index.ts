import { createAction } from 'redux-actions';
import * as types from './ActionTypes';
import { getRandomColor } from '../utils';

export type Action =
  | {
      type: typeof types.CREATE;
      payload: {
        color: string;
      }
    }
  | {
      type: typeof types.REMOVE;
    }
  | {
      type: typeof types.INCREMENT;
      payload: {
        index: number;
      }
    }
  | {
      type: typeof types.DECREMENT;
      payload: {
        index: number;
      }
    }
  | {
      type: typeof types.SET_COLOR;
      payload: {
        color?: string;
        index: number;
      }
    };

export const actionCreators = {
  increment: createAction(types.INCREMENT),
  decrement: createAction(types.DECREMENT),
  create: createAction(types.CREATE),
  remove: createAction(types.REMOVE),
  setColor: createAction(types.SET_COLOR),
};

export const create = (color: string) => ({
  type: types.CREATE as typeof types.CREATE,
  color,
});

export const remove = () => ({
  type: types.REMOVE as typeof types.REMOVE,
});

export const increment = (index: number) => ({
  type: types.INCREMENT as typeof types.INCREMENT,
  index,
});

export const decrement = (index: number) => ({
  type: types.DECREMENT as typeof types.DECREMENT,
  index,
});

export const setColor = ({
  index,
  color = getRandomColor(),
}: {
  index: number;
  color?: string;
}) => ({
  type: types.SET_COLOR as typeof types.SET_COLOR,
  index,
  color,
});
