import { useRef, useState } from 'react';

const UseRefHookTwo = ({ pageRef }) => {
  const refCounter = useRef(0);
  const [stateCounter, setStateCounter] = useState(0);

  console.log('component rerendering');

  const incrementRef = () => {
    refCounter.current = refCounter.current + 1;
    console.log(`ref counter not rerendering ${refCounter.current}`);
  };

  const incrementCounter = () => {
    setStateCounter((stateCounter) => stateCounter + 1);
    console.log(`state counter rerendering ${stateCounter}`);
  };

  return (
    <div>
      <h2>state counter: {stateCounter}</h2>
      <button onClick={incrementCounter}>state count</button>

      <h2>{refCounter.current}</h2>
      <button onClick={incrementRef}>ref count</button>
    </div>
  );
};

export default UseRefHookTwo;
