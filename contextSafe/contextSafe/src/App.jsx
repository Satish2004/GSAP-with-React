import React, { useRef } from 'react'
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import "./App.css";


const App = () => {

  const boxRef= useRef();
  // using context safe;
  // lagging and memory management problem is solved

  const {contextSafe} = useGSAP();

  const handleOnClick = contextSafe(()=>{
    gsap.to(boxRef.current, {
      x:300,
      rotate: 360,
      duration:2
    })
  })

  return (
<main>

<button onClick={handleOnClick}>Animate</button>
<div ref={boxRef} className="box"></div>

</main>
  )
}

export default App