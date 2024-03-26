// import { AuthereumConnector } from '@web3-react/authereum-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/8f124cd3a8604274b0ce43cf8cd43f20',
  // 1: 'https://mainnet.infura.io/v3/4cdc49557cfdd0f646fc183d37d84f8e',
  // 4: 'https://rinkeby.infura.io/v3/4cdc49557cfdd0f646fc183d37d84f8e',
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
