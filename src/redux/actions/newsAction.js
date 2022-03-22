import { _NEWS_ } from "../util/types";

export function updateNewsState(data){
    return {
        type: _NEWS_,
        payload: data
    }
}