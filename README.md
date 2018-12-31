# redux-counter

연습삼아 ts로 전환해보기

## 1. react-scripts-ts

react-scripts-ts를 통해 빌드하기 위해 tsconfig.json 추가

## 2. presentational component 전환

### Stateless Component

```ts
import * as React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const MyComponent: React.StatelessComponent<Props> = props => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

export default MyComponent;
```

_한 거_

- propTypes가 불필요.
  - type, interface로 대체

> import \* as React from 'react'로 바뀐 이유
> TS가 React를 이해할 수 있는 방법 아래와 같음
> interopt 모듈이 표준화되지 않아서 그럼

```ts
// import react from 'react';
import * as React from 'react';
```

_의문_

- prop에 대한 interface를 재활용 할 수 있을 거 같음
- export해서 어디선가 활용할 수 있을 거 같음

## 3. actions

KISS STYLE 준수(Keep it short and simple)

- 전통적인 const 타입 사용
- 표준에 가까운 JS 사용
- 표준 boilerplate

```ts
export const create = (color: string) => ({
  type: types.CREATE as typeof types.CREATE,
  color,
});
```

- action의 type은 string 상수값을 가지는게 명확하므로 assertion 사용

## 4. Reducers

```ts
// 1. readonly를 사용한 타입으로 state, props을 불편으로 표시하고 컴파일러를 이용해 모든 변형에 대해 보호합니다.
export type State = {
  readonly counter: number;
  readonly baseCurrency: string;
};

// 2. 초기 state 선언
export const initialState: State = {
  counter: 0,
  baseCurrency: 'EUR',
};

initialState.counter = 3; // Error: 읽기 전용 속성이므로 'counter'에 할당할 수 없습니다.
```

- \_\_Declare reducer `State` 유형을 선언하여 컴파일 타임에서 불변성 확보
  - 또한, reaonly를 사용한 타입으로 state, props를 직접 변경하는 것에 대해 보호

**switch style reducer**

- 전통적인 const 타입 사용
- 단일 prop 업데이트 or 간단한 state object에 적합

```ts
import { Action } from '../../types';

export default function reducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1, // no payload
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload, // payload: string
      };

    default:
      return state;
  }
}
```

여기서 types의 Action은 action 객체에 들어올 수 있는 `payload({ type, ...dataObj })`를 Union type으로 선언된 얘들..

```ts
export type Action =
  | {
      type: typeof types.CREATE;
      color: string;
    }
  | {
      type: typeof types.REMOVE;
    };
```
