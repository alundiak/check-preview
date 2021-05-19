import { Main } from './components/Main';
import { Test } from './parent-child-test/Test';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Main />
      <Test />
    </div>
  );
}

export default App;
