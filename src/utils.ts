/* eslint-disable prettier/prettier */
import * as nearAPI from 'near-api-js';
import { WalletConnection } from 'near-api-js';
import getConfig, { IConfig } from './config';

export interface IContract {
  fakeNewsContract: any; // TODO: figure out how to initialize as a Contract
  currentUser: { accountId: string; balance: number } | undefined;
  nearConfig: IConfig;
  walletConnection: WalletConnection;
}

export async function initContract() {
  const nearConfig = getConfig('testnet');
  const nearConfigFakeNews = getConfig('testnet', 'news.fakeless.testnet');
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

  // Initializing connection to the NEAR testnet
  const near = await nearAPI.connect({
    keyStore,
    headers: {},
    ...nearConfigFakeNews,
  });

  // Initialize wallet connection
  const walletConnection = new WalletConnection(near, null);

  // Load in user's account data
  let currentUser;
  try {
    if (walletConnection.getAccountId()) {
      currentUser = {
        // Gets the accountId as a string
        accountId: walletConnection.getAccountId(),
        // Gets the user's token balance
        balance: (await walletConnection.account().state()).amount,
      };
    }
  } catch (err) {
    console.error(err);
  }

  // Initializing our contract APIs by contract name and configuration
  const fakeNewsContract = new nearAPI.Contract(
    // User's accountId as a string
    walletConnection.account(),
    nearConfigFakeNews.contractName,
    {
      viewMethods: ['get_all', 'get_by_index'],
      changeMethods: ['vote', 'add', 'nft_mint'],
    },
  );

  return {
    fakeNewsContract,
    currentUser,
    nearConfig,
    walletConnection,
  } as IContract;
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const NEAR_TOKEN_PRECISION = 10 ** 24;
