import React from 'react'

import * as  dlib  from 'iot-dash-lib'
import 'iot-dash-lib/dist/index.css'

const App = () => {
  return <div>   
          <dlib.ExampleComponent text="Create React Library Example 😄" />
          <dlib.ChartJS type='bar'/>
         </div>

}



export default App
