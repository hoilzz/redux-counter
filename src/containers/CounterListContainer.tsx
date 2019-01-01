import * as React from 'react';
import CounterList from '../components/CounterList';
import { actionCreators as counterActions } from '../actions';
import { connect } from 'react-redux';
import { IState, ICounter } from '../reducers';
import { bindActionCreators } from 'redux';

interface IProps {
  counters: ICounter[];
  CounterActions: typeof counterActions;
}

class CounterListContainer extends React.Component<IProps> {
  public render() {
    // const { CounterActions, counters } = this.props;
    return <CounterList {...this.props} />;
  }
}

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
export default connect(
  (state: IState) => ({
    counters: state.counters,
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
  }),
)(CounterListContainer);
