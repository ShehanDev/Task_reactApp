import { useState } from "react";
import bulbOn from './assets/Images/bulb_on.png'
import bulbOff from './assets/Images/bulb_off.png'

function App() {
//buttion ofF  image is default state 
  const [img, setImg] = useState(bulbOff);
//change state thrugh the  buttion 
  return ( 
    <div>
     <h1>Task 2- React  #</h1>
     <button onClick={()=>setImg(bulbOn)}> On the bulb </button>
     <img src={img} style={{width:"250px" ,height:"200px"}} />
    <button onClick={()=>setImg(bulbOff)}>Off the bulb</button>
    </div>
  
   );

}


export default App;
