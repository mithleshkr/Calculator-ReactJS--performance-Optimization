import React,{ useState } from "react";

const App = () => {
   const [numberOne, setNumberOne] = useState("");
   const [numberTwo, setNumberTwo] = useState("");
   const [finalValue, setFinalValue] = useState("");
   
   function Calculation (params){
     if (params=== "+"){
       setFinalValue(parseInt(numberOne) + parseInt(numberTwo))
     }
     else if (params==="-"){
       setFinalValue(parseInt(numberOne) - parseInt(numberTwo))
     }
     else if (params==="*"){
       setFinalValue(parseInt(numberOne) * parseInt(numberTwo))
     }
     else
     {
       setFinalValue(parseInt(numberOne)/parseInt(numberTwo));
     }
   }
  return (
   

    <div>
      <div className="mainDiv">
        <h1>Calculator  </h1><span><h1 style={{textColor:"red"}}>{finalValue}</h1></span>
      </div>
      <div>
        <input
         type="number" 
         placeholder="Enter 1st number"
         value={numberOne} 
         onChange={(e)=>setNumberOne(e.target.value)}
         />
         <br />
          <br />
        <input
         type="number" 
         placeholder="Enter 2st number" 
         value={numberTwo}
         onChange={(e)=>setNumberTwo(e.target.value)}
         />
         <br />
         <br />
         <button onClick={()=>Calculation("+")}>Add +</button>
         <button onClick={()=>Calculation("-")}>Sub -</button>
         <button onClick={()=>Calculation("*")}>MUl *</button>
         <button onClick={()=>Calculation("/")}>Div /</button>
         
      </div>
    </div>
  );
};
export default App;
