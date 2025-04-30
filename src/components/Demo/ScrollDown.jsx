import { useRef } from 'react';

import UseRefHookOne from './Demo/UseRefHookOne';

import './App.css'; // Assuming you're adding styles here

const ScrollDown = () => {
  const sectionRef = useRef();

  const scrollToTarget = () => {
    // sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    sectionRef.current.classList.add('highlight');

    // Optional: Remove the class after the animation, if you want it to reset
    setTimeout(() => {
      sectionRef.current.classList.remove('highlight');
    }, 2000); // 2 seconds or match your CSS transition time
  };

  return (
    <div>
      <button onClick={scrollToTarget}>Go to Section</button>

      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        <h2>Welcome</h2>
      </div>

      <div ref={sectionRef} className='target-section'>
        <h2>This is the Target Section</h2>
      </div>
      {/* 
      <div
        ref={sectionRef}
        className='target-section'
        style={{ height: '100vh' }}
      >
        <h2>Another Section</h2>
      </div> */}
      <div style={{ height: '100vh' }}>
        <h2>Another Section</h2>
      </div>
      {/* <UseRefHookOne sectionRef={sectionRef} /> */}
    </div>
  );
};

export default ScrollDown;
