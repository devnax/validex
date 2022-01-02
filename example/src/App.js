import React, {useState} from 'react'

import validex from 'validex'

const validator = validex({name: "asdsad"}, {
  name: {
    min: 2,
    mediumPassword: true
  }
})

const App = () => {
  const [state, setState] = useState({
    name: ''
  })
  
  console.log(validator);

  return <div>
    <input type="text" value={state.name} 
    onChange={(e) => setState({...state, name: e.target.value})} onFocus={() => {
      validator.removeError('name')
      setState({...state,  cn: Math.random()})
    }}/>
    <p style={{color: 'red'}}>{validator.getError('name')}</p>
    <button onClick={() => {
      validator.validate()
      
      setState({...state, cn: Math.random()})
    }}>Check</button>
  </div>
}

export default App
