import dotenv from 'dotenv';

import { Account } from './domain/monzo/account';
import { AccountTypeEnum } from './domain/monzo/accountType';

dotenv.config();

(async (): Promise<void> => {

    const personalAccount = new Account(AccountTypeEnum.Personal);

    try {
        await personalAccount.get();
        await personalAccount.getBalance();
        await personalAccount.getPots();
        await personalAccount.print();
    } catch(err) {
            console.log(err.response.data);
    }

    const jointAccount = new Account(AccountTypeEnum.Joint);

    try {
        await jointAccount.get();
        await jointAccount.getBalance();
        await jointAccount.print();
    } catch(err) {
            console.log(err.response.data);
    }

})();

