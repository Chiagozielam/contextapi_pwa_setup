import React, { useReducer, useContext } from 'react'
import GeneralContext from './GeneralContext'
import GeneralReducer from './GeneralReducer'
import { EXAMPLE } from '../types'

const GeneralProvider = ({ children }) => {

  const initialState = {
    testExxampleString: ""
  }

  const [state, dispatch] = useReducer(GeneralReducer, initialState)

  // this function is just an example to show how the state is changes and used.
  const runExampleFunction = () => {
    dispatch({
      type: EXAMPLE,
      payload: "Getting Started Example Dispatch",
    });
    return
  };

  return (
    <GeneralContext.Provider
      value={{
        state: state,
        runExampleFunction,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}

export const useGeneralContext = () => {
  const allContextValues = useContext(GeneralContext)
  return {
    ...allContextValues
  }
}


export default GeneralProvider;
