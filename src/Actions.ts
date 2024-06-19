export enum ActionType {
    ON_CHANGE_USER,
    ON_CHANGE_ARTIKAL,
    CLEAR,
  }
  
  interface OnChangeUser {
    type: ActionType.ON_CHANGE_USER;
    payload: { name: string; age: number };
  }
  
  interface OnChangeArtikal {
    type: ActionType.ON_CHANGE_ARTIKAL;
    payload: { name: string; amount: number, price : number, description :string};
  }

  interface Clear {
    type: ActionType.CLEAR;
  }
  
  export type Actions = OnChangeUser | Clear | OnChangeArtikal;