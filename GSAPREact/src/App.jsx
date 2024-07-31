import React, { useRef, useState } from 'react'
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import "./App.css";

const App = () => {


const random = gsap.utils.random(0 , 500 , 10);
const rotate = gsap.utils.random(-360, 360, 30);

  const [circle, setCircle] = useState(0);
  const[roti , setRoti] = useState(0);
const handleOnClick =()=>{
  setCircle(random); 
  setRoti(rotate);
}
useGSAP(()=>{
gsap.to(".circle",{
  x:circle,
  duration:1,
  roate:roti,
})
},[random, rotate])

  return (

 <main>

<button onClick={handleOnClick}>Animate</button>
<div className="circle">

</div>


 </main>
  )
}

export default App