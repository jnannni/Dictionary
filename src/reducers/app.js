import * as types from '../common/actionTypes/app'

export const initialState = {
  title: 'Vocabulary Check',
  isLoading: false,
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, isLoading: action.data }
    default:
      return state
  }
}
