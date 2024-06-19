
export interface Artikal {
    artikalId : number;
    name : string ;
    price : number ;
    amount : number ;
    description : string;
}

export const initialState: Artikal = {
    artikalId : 0,
    name : '',
    price : 0,
    amount : 0,
    description : ''
};