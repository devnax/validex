import React, {useState} from 'react'

import validex from 'validex'

const App = () => {
  const [state, setState] = useState('')
  const validator = validex({name: state}, {
    name: {
      min: 2,
      type: 'number',
      maxNumberRange: 9000
    }
  })
  validator.validate()

  return <div>
    <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
    <p style={{color: 'red'}}>{validator.errorMessage()}</p>
  </div>
}

export default App
