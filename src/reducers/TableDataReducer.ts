import { act } from "react";
import { Actions, ActionType } from "../Actions";
import { User } from '../model/User';
import { Artikal } from "../model/Artikal";

function tableDataReducer(state: Artikal[], action: Actions): Artikal[] {
    switch (action.type) {
        case ActionType.ON_ADD: {
            return {
                ...state,
                push: action.payload.data.push
            };
        }


        default:
            return state;
    }
}

export default tableDataReducer;