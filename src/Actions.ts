export enum ActionType {
    ON_CHANGE_USER,
    ON_LOGIN_USER,
    ON_SELECT_ARTIKAL,
    ON_CHANGE_ARTIKAL,
    CLEAR,
  }
  
  interface OnChangeUser {
    type: ActionType.ON_CHANGE_USER;
    payload: { username: string; password: string , name: string, surname:string, age:number};
  }
  
  interface onLogin{
    type: ActionType.ON_LOGIN_USER;
    payload: { username: string; password: string };
  }
  interface OnChangeArtikal {
    type: ActionType.ON_CHANGE_ARTIKAL;
    payload: { name: string; amount: number, price : number, description :string};
  }

  interface Clear {
    type: ActionType.CLEAR;
  }

  interface OnSelectArtikal{
    type: ActionType.ON_SELECT_ARTIKAL;
    payload: {artikalId:number, name: string; amount: number, price : number, description :string}

  }
  
  export type Actions = OnChangeUser | Clear | OnChangeArtikal | OnSelectArtikal | onLogin;