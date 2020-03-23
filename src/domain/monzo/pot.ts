export interface Pot {
    id: string;
    name: string;
    balance: number;
}

export class Pot implements Pot {
    id: string = "";
    name: string = "";
    balance: number = 0;
}