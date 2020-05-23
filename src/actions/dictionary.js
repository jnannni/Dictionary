import * as types from '../common/actionTypes/dictionary'
import { axios } from './axiosConfig'
import {setAppLoading} from "./app";

export const addWord = (word) => (dispatch) => {
    dispatch({
        type: types.ADD_WORD,
        data: word,
    })
}

export const setLanguages = (langs) => (dispatch) => {
    dispatch({
        type: types.SET_LANGS,
        data: langs,
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

export const getLanguages = () => (dispatch) => {
    axios({
        url: 'https://translate.yandex.net/api/v1.5/tr/getLangs',
        method: 'GET',
        data: {
            key: "trnsl.1.1.20200517T142351Z.c69a6ea386326cff.a964b2bce894646453704e9203644db56cc5b39b",
            ui: "en",
        }
    })
        .then((response) => {
            setAppLoading(false)
            return Promise.resolve(response)
        })
        .catch((e) => {
            setAppLoading(false)
            Promise.reject(e)
        })
}
