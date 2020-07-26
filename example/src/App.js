import React from 'react'
import IOTComponents from 'iot-dash-lib'
import 'iot-dash-lib/dist/index.css'



const App = () => {
  return(
  IOTComponents.map((Component, key) => (
    // Remember to make first letter capital (in this case "c")
    <Component key={key}/> ) )
  );
  
}




export default App
