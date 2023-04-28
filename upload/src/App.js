
import './App.css';
import Counter from './Counter';
import data from './data.json'
import Trainer from './Trainer';
import Content from './Content';
import SubContent from './SubContent';
import LoginControl from './LoginControl';

function App() {
  return (
    <>
      <LoginControl/>

      <Counter/>
      {/* {data.map((d) => <Trainer name = {d.name} age = {d.age} />)} */}
      <div id = "text">
        <h2>Trainer data example</h2>
      {data.map(({name, age, id}) => <Trainer key={id} name = {name} age = {age} />)}
      </div>

      <Content/>

      <SubContent/>
    </>
  );
}

export default App;
