import { useEffect, useRef } from 'react';

import UseRefHookOne from './Demo/UseRefHookOne';

const WhyUseRef = () => {
  const pageRef = useRef();
  useEffect(() => {
    pageRef.current.style.background = 'beige';
  }, []);

  const toggleColor = () => {
    const currentColor = pageRef.current.style.background;
    pageRef.current.style.background =
      currentColor === 'beige' ? 'lightBlue' : 'beige';
  };
  return (
    <>
      <div ref={pageRef} style={{ padding: '20px' }}>
        <button onClick={toggleColor}>change color</button>
      </div>
    </>
  );
};

export default WhyUseRef;
