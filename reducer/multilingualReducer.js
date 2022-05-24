import { WORDS_EN } from '../helper/multilingual/en'
import { WORDS_ID } from '../helper/multilingual/id'
export const ID = "ID"
export const EN = "EN"
const initialData = {
    words: WORDS_ID,
    language: ID // ID or EN

}

export const ID_LANGUAGE = "ID_LANGUAGE"
export const EN_LANGUAGE = "EN_LANGUAGE"
export default function multilingualReducer(state = initialData, action) {
    switch (action.type) {
        case ID_LANGUAGE:
            return {
                ...state,
                words: WORDS_ID,
                language: ID
            }
        case EN_LANGUAGE:
            return {
                ...state,
                words: WORDS_EN,
                language: EN
            }
        default:
            return state;
    }
}