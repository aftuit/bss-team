import { _NEWS_ } from "../util/types";

const initialValue = {
    value: "currentValue"
}

export const newsReducer = (state=initialValue, action) => {
    if(action.type === _NEWS_) {
        return {
            ...state,
            ...action.payload
        }
    }
    else{
        return state
    }
}