import { Actions,ActionType } from "../Actions";
import { User } from '../model/User';

function userReducer(state: User, action: Actions): User {
  switch (action.type) {
    case ActionType.ON_CHANGE_USER: {
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
      };
    }
    case ActionType.CLEAR: {
      return {
        ...state,
        name: '',
        age: 0,
      };
    }
    default:
      return state;
  }
}

export default userReducer;