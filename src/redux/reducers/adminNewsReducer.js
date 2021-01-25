import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";

const initialState = {
    modalOpen: false,
    selectedImage: ""
}

export const adminNewsReducer = (state= initialState, action) => {
    switch (action.type){
        case UPDATE_STATE:
            return {...state, ...action.payload}
        default: return state;
    }
}
