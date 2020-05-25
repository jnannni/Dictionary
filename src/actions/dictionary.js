import * as types from '../common/actionTypes/dictionary'
import { axios } from './axiosConfig'
import { setAppLoading } from './app'

export const addWord = (word) => async (dispatch) => {
  await axios({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    method: 'GET',
    params: {
      key: process.env.REACT_APP_YANDEX_API_KEY,
      text: word.value,
      lang: word.source + '-' + word.target,
    },
  }).then((res) => (word.translation = res.data.text))
  dispatch({
    type: types.ADD_WORD,
    data: word,
  })
}

export const toggleBox = (id) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_BOX,
    data: id,
  })
}

export const setLanguages = () => async (dispatch) => {
  const res = await axios({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
    method: 'GET',
    params: {
      key: process.env.REACT_APP_YANDEX_API_KEY,
      ui: 'en',
    },
  })
  dispatch({
    type: types.SET_LANGS,
    data: res.data.langs,
  })
}

export const setSource = (lang) => (dispatch) => {
  dispatch({
    type: types.SET_SOURCE,
    data: lang,
  })
}

export const setTarget = (lang) => (dispatch) => {
  dispatch({
    type: types.SET_TARGET,
    data: lang,
  })
}

export const getTranslation = async (word, from, to) => {
  /*axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
        "trnsl.1.1.20200517T142351Z.c69a6ea386326cff.a964b2bce894646453704e9203644db56cc5b39b&text" + word +
        '&lang' + from + "-" + to)
        .then(data => this.setState({translation: data.data.text}))
        .catch(err => console.log(err));*/
  const translation = await axios({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    method: 'GET',
    params: {
      key:
        'trnsl.1.1.20200517T142351Z.c69a6ea386326cff.a964b2bce894646453704e9203644db56cc5b39b',
      text: word,
      lang: from + '-' + to,
    },
  })
  return translation.data.text
}
