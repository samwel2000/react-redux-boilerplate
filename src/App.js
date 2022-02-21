
import { connect } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/Counter/counter.action';

function App(props) {
  return (
    <div className="App">
      <div style={{
        width: '100vw',
        height: '100vh',
        fontSize: '30px',
        gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <button style={{ padding: '2rem' }}
          onClick={() => props.decreaseCounter()}>-</button>
        <p>
          {props.count} times
        </p>
        <button style={{ padding: '2rem' }}
          onClick={() => props.increaseCounter()}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increment()),

    decreaseCounter: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
