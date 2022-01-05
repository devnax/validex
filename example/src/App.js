import React, {useState} from 'react'

import validex, {isString} from 'validex'

const data = {
  person: {
    names: "naxrul",
    email: "nax@gmail.com"
  }, 
  lastname: "ab"
}

const validator = validex(data, {
  person: {
    shape: {
      name: {
        min: 102,
        email: true
      },
      email: {
        email: true
      }
    }
  },
  lastname: {
  },
})

const App = () => {
  const [state, setState] = useState({
    name: "",
    lastname: ""
  })

  
  //console.log(validator);

  return <div>
    <input type="text" value={state.name} 
    onChange={(e) => setState({...state, name: e.target.value})} onFocus={() => {
      validator.removeError('name')
      setState({...state,  cn: Math.random()})
    }}/>
    <p style={{color: 'red'}}>{validator.getError('person')}</p>
    <input type="text" value={state.lastname} 
    onChange={(e) => setState({...state, lastname: e.target.value})} onFocus={() => {
      validator.removeError('lastname')
      setState({...state,  cn: Math.random()})
    }}/>

    <p style={{color: 'red'}}>{validator.getError('lastname')}</p>
    <button onClick={() => {
      validator.validate()
      
      setState({...state, cn: Math.random()})
    }}>Check</button>
  </div>
}

export default App
