export class User{
    username:string | undefined;
    password : string | undefined;
    name : string | undefined;
    surname : string | undefined;
    age : number | undefined;
}

export const initialState: User = {
    name: '',
    username: '',
    password: '',
    surname: '',
    age: 0
};