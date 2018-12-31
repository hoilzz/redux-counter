import * as React from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { getRandomColor } from '../utils';

type IProps = typeof mapToDispatch;

class App extends React.Component<IProps, {}> {
  public render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션함수 준비
const mapToDispatch = {
  onCreate: () => actions.create(getRandomColor()),
  onRemove: actions.remove,
};

// 리덕스에 연결을 시키고 내보낸다
export default connect(
  null,
  mapToDispatch,
)(App);
