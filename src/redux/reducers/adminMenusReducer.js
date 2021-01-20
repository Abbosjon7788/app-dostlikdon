import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";

const initialState = {
    modalOpen: false,
    isSubMenu: false,
    generatedUrl: "",
    menus: []
}

export const adminMenusReducer = (state= initialState, action) => {
    switch (action.type){
        case UPDATE_STATE:
            return {...state, ...action.payload}
        default: return state;
    }
}
