import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Redemo from './Redemo';

function Demo() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("this is testing");
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });
let object = {
    name:"Durga",
    age:25
}

  return <h1>I have rendered <Redemo {...object} /> times!</h1>;
}

export default Demo;