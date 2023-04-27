import './App.css';
import Header2 from './Headers'
import MyComponent from './MyComponent';
import Trainer from './Trainer';
// import PrompComp from './Hello';
import Counter from './Counter';
import Converter from './Converter';
import Car from './Car';

function App() {

  const trainers = [
    {id:1, name:"mal"},
    {id:2, name:"ik"}
  ]

  return (
    <>
      <Header2 />
      <MyComponent />
      {/* <Trainer name="JH" age={28}/> */}
      {/* <PrompComp /> */}
      {/* <h1> Hello </h1>
      <h2> Hi </h2>
      <p> hello again </p> */}

      <ul>
        {trainers.map((trainee) => <Trainer key = {trainee.id} name = {trainee.name}/>)}
      </ul>

      <Counter/>
      
      <Converter/>

      <Car/>

    </>
  );
}

export default App;
