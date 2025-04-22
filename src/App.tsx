/**
 * 
 * 
 * using useState in react context cause rerendering of non used compoennts
 * that is why it is better to use it with a state manager
 * this als owould help if we want to pass an initial property to the state variable
 */
import { useContext } from 'react';
import './App.css'
import CountProvider, { useCountStore } from './CountProvider';
import UseStateCountProvider, { UseStateCountContext } from './UseStateCountProvider';

function App() {
  const initialCount = 2;
  return (
  // <CountProvider initialCount={initialCount}>
  //   <StaticComponent/>
  //   <DynamicComponent/>
  // </CountProvider>
  <UseStateCountProvider initialCount={initialCount}>
    <StaticComponent/>
    <DynamicComponent/>
  </UseStateCountProvider>
  )
}

function StaticComponent(){
  return (<h1>Hello there! this is a static title to check if it gets rendered when changing the non used state here</h1>)
}

function DynamicComponent(){
  // const count = useCountStore((state)=>state.count);
  // const inc = useCountStore(state=>state.inc)
  const context = useContext(UseStateCountContext);
  if(!context){
    throw new Error("CountContext.Provider is missing");
  }

  const [count,inc] = context;
  return (<>
    <p>
      Count is: {count};
    </p>
    <button onClick={inc}>Inc counter</button>
  </>
  
);
}

export default App;
