import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { IState } from '../reducers';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state: IState) => ({
  counters: state.counters,
});

const mapDispatchToProps = {
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
  onSetColor: actions.setColor,
};

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList);

export default CounterListContainer;
