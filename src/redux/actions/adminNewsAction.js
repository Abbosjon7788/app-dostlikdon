import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";


export function updateState (data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}