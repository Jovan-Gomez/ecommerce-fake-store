import { types } from '../types'

const initialState = {
  token: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return action.payload
    case types.logout:
      return ''

    default:
      return state
  }
}
