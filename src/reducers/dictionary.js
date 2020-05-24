import * as types from '../common/actionTypes/dictionary'

export const initialState = {
  words: [],
  langs: [],
  transaltion: [],
  sourceLang: '',
  targetLang: ''
}

export default function dictionary(state = initialState, action) {
  switch (action.type) {
    case types.ADD_WORD:
      return { ...state, words: [...state.words, action.data] }
    case types.SET_LANGS:
      return {...state, langs: action.data}
    case types.SET_SOURCE:
      return { ...state, sourceLang: action.data}
    case types.SET_TARGET:
      return { ...state, targetLang: action.data}
    case types.TOGGLE_BOX:
      return { ...state, words: state.words.map(word =>
            (word.id === action.data) ? {...word, completed: !word.completed} : word)}
    default:
      return state
  }
}
