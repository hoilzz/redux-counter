import * as React from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

import { connect } from 'react-redux';
import { actionCreators as counterActions } from '../actions';

import { getRandomColor } from '../utils';
import { bindActionCreators } from 'redux';

interface IProps {
  CounterActions: typeof counterActions;
}

class App extends React.Component<IProps, {}> {
  public onCreate: () => void = () =>
    this.props.CounterActions.create({ color: getRandomColor() });
  public render() {
    const { CounterActions } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={this.onCreate} onRemove={CounterActions.remove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션함수 준비
// const mapToDispatch = {
//   onCreate: () => actions.create(getRandomColor()),
//   onRemove: actions.remove,
// };

// 리덕스에 연결을 시키고 내보낸다
export default connect(
  null,
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
  }),
)(App);
