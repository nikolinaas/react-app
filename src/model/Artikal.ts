
export class Artikal {
    name : string | undefined;
    price : number | undefined;
    amount : number | undefined;
    description : string | undefined;
}

export const initialState: Artikal = {
    name : '',
    price : 0,
    amount : 0,
    description : ''
};