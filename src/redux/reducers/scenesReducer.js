
import { SCENETYPE } from '../util/types'

const initialState = {
    topCarouselImages: [
        {id: 1, src: "../../assets/img/head.png", alt: "error"},
        {id: 1, src: "../../assets/img/head.png", alt: "error"},
        {id: 1, src: "../../assets/img/head.png", alt: "error"},
        {id: 1, src: "../assets/img/head.png", alt: "error"},
    ],
}

export const scenesReducer = (state=initialState, action) => {
    if(action.type === SCENETYPE){
        return {
            ...state,
            ...action.payload
        }
    }
    else return state
}