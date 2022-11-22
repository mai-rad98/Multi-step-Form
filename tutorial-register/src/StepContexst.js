
import React,{useState} from "react";
import App from './App'



export const multiStepContext = React.createContext();

 function StepContex () {

const[finalData , setFinalData]=useState([]);

return (
    <div>
    <multiStepContext.Provider value={{finalData,setFinalData}}>
        <App />
    </multiStepContext.Provider>
    
    </div>
)
}

export default  StepContex;