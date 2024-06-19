import { ActionType, Actions } from "../Actions";
import { Artikal } from "../model/Artikal";

function artikalReducer(state: Artikal, action: Actions): Artikal {
    switch (action.type) {
      case ActionType.ON_CHANGE: {
        return {
          ...state,
          name: action.payload.name
          //dodati ostale clanove klase
        };
      }
      case ActionType.CLEAR: {
        return {
          ...state,
          name: ''
          //dodati ostale clanove klase
        };
      }
      default:
        return state;
    }
  }
  
  export default artikalReducer;