export interface User{
    username:string ;
    password : string;
    name : string;
    surname : string ;
    age : number;
}

export const initialState: User = {
    name: 'nam',
    username: 'username',
    password: '',
    surname: '',
    age: 0
};