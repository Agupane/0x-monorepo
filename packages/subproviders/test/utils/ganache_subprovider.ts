import { GanacheSubprovider } from '@0x/dev-utils';
import * as fs from 'fs';

import { configs } from '../utils/configs';

const logger = {
    log: (arg: any) => {
        fs.appendFileSync('ganache.log', `${arg}\n`);
    },
};

export const ganacheSubprovider = new GanacheSubprovider({
    logger,
    verbose: false,
    port: configs.port,
    networkId: configs.networkId,
    mnemonic: configs.mnemonic,
}) as any;
