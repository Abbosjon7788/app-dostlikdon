import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";


export function updateState (data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function saveFile(data){
    return function (dispatch) {
        let image = new FormData();
        image.append("image", data);

        axios.post(API_PATH + "file/save", image)
            .then(res => {
                console.log(res);
                if (res.status === 200){
                    dispatch(updateState({selectedImage: res.data.id}))
                } else {
                    toast.error("Xatolik!!!");
                }
            })
    }
}

