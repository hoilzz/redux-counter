# redux-counter

연습삼아 ts로 전환해보기

## 1. react-scripts-ts

react-scripts-ts를 통해 빌드하기 위해 tsconfig.json 추가

## 2. presentational component 전환

### Stateless Component

```ts
import * as React from 'react';

type Props = {
  className?: string,
  style?: React.CSSProperties,
};

const MyComponent: React.StatelessComponent<Props> = (props) => {
  const { children, ...restProps } = props;
  return (
    <div {...restProps} >
      {children}
    </div>
  );
};

export default MyComponent;
```

- propTypes가 불필요.
  - type, interface로 대체


- TS가 React를 이해할 수 있는 방법 아래와 같음

```ts
// import react from 'react';
import * as React from 'react'
```

interopt 모듈이 표준화되지 않음