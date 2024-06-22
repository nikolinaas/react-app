import { ActionType, Actions } from "../Actions";
import { Artikal } from "../model/Artikal";

function artikalReducer(state: Artikal, action: Actions): Artikal {
    switch (action.type) {
      case ActionType.ON_CHANGE_ARTIKAL: {
        return {
          ...state,
          name: action.payload.name,
          description : action.payload.description,
          amount : action.payload.amount,
          price : action.payload.price
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
      case ActionType.ON_SELECT_ARTIKAL: {
        return {
          ...state,
          artikalId : action.payload.artikalId,
          name: action.payload.name,
          description : action.payload.description,
          amount : action.payload.amount,
          price : action.payload.price
          //dodati ostale clanove klase
        };
      }
      default:
        return state;
    }
  }
  
  export default artikalReducer;