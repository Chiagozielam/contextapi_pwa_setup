import { EXAMPLE } from '../types'

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case EXAMPLE:
      return{
        ...prevState,
        testExxampleString: payload
      }
    default:
      return prevState
  }
}

export default GeneralReducer
