import { act } from "react";
import { Actions, ActionType } from "../Actions";
import { User } from '../model/User';

function userReducer(state: User, action: Actions): User {
  switch (action.type) {
    case ActionType.ON_CHANGE_USER: {
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname,
        age: action.payload.age
      };
    }
    case ActionType.ON_LOGIN_USER: {
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };
    }
    case ActionType.CLEAR: {
      return {
        ...state,
        username: '',
        password: '',
      };
    }
    default:
      return state;
  }
}

export default userReducer;