import './App.css'
import CountProvider, { useCountStore } from './CountProvider';

function App() {
  const initialCount = 2;
  return (
  <CountProvider initialCount={initialCount}>
    <StaticComponent/>
    <DynamicComponent/>
  </CountProvider>
  )
}

function StaticComponent(){
  return (<h1>Hello there! this is a static title to check if it gets rendered when changing the non used state here</h1>)
}

function DynamicComponent(){
  const count = useCountStore((state)=>state.count);
  const inc = useCountStore(state=>state.inc)
  return (<>
    <p>
      Count is: {count};
    </p>
    <button onClick={inc}>Inc counter</button>
  </>
  
);
}

export default App;
