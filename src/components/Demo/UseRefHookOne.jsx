import './App.css';

const UseRefHookOne = ({ sectionRef }) => {
  return (
    // <div style={{ background: colorRef.current ? 'pink' : 'lightBlue' }}>
    <div>
      useRef
      <p ref={sectionRef} className='target-section'  >sectionRef p</p>
      <button>toggle</button>
    </div>
  );
};

export default UseRefHookOne;

// import React, { forwardRef } from 'react';

// const UseRefHookOne = forwardRef(({ forwardedRef }, ref) => {
//   const differentAnimation = () => {
//     if (forwardedRef.current) {
//       // Apply styles on the element in the child component using the ref
//       forwardedRef.current.style.background = 'yellow';
//       forwardedRef.current.style.color = 'red';
//       forwardedRef.current.style.transition = 'all 1s ease';
//     }
//   };

//   return (
//     <div>
//       <button onClick={differentAnimation}>Apply Different Style</button>
//       <div ref={forwardedRef}>
//         <h2>Child Section</h2>
//       </div>
//     </div>
//   );
// });

// UseRefHookOne.displayName = 'UseRefHookOne';

// export default UseRefHookOne;
