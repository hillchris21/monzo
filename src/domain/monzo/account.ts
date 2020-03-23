import { default as axios } from 'axios';

import { AccountTypeEnum } from './accountType';
import { Pot } from './pot';
import { mapPot } from '../../helpers/mapHelpers';

export interface Account {
    type: AccountTypeEnum;
    id: string;
    balance: number;
    account_number: string;
    sort_code: string;
    pots: [Pot];
}

export class Account implements Account {

    public id: string;
    public balance: number;
    public account_number: string;
    public sort_code: string;

    constructor(public type: AccountTypeEnum) {
        this.type = type;
    }

    async get(): Promise<void> {
        const response = await axios.get('https://api.monzo.com/accounts', { headers: { Authorization: 'Bearer ' + process.env.TOKEN } });
        this.id = response.data.accounts.filter((a: Account) => a.type === this.type.toString())[0].id;
    }

    async getBalance(): Promise<void> {
        const response = await axios.get(`https://api.monzo.com/balance?account_id=${this.id}`, { headers: { Authorization: 'Bearer ' + process.env.TOKEN } });
        this.balance = response.data.balance / 100
    }

    async getPots(): Promise<void> {
        const response = await axios.get('https://api.monzo.com/pots', { headers: { Authorization: 'Bearer ' + process.env.TOKEN } });
        mapPot(new Pot());
        this.pots = response.data.pots;
    }

    print(): void {
        console.dir(this, { depth: null });
    }
    
}