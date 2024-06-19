
export interface Artikal {
    name : string ;
    price : number ;
    amount : number ;
    description : string;
}

export const initialState: Artikal = {
    name : '',
    price : 0,
    amount : 0,
    description : ''
};