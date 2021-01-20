import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";


export function updateState (data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function addMenu(data){
    return function (dispatch){
        axios.post(API_PATH + "menu", data)
            .then((res) => {
                console.log(res);
            })
    }
}

export function getMenus(){
    return function (dispatch){
        axios.get(API_PATH + "menu")
            .then((res) => {
                dispatch(updateState({menus: res.data.data}))
            })
    }
}