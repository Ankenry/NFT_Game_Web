/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
// import '!file-loader?name=[name].[ext]!./images/favicon.ico';
// import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

// Import i18n messages
import {
  Web3ReactProvider,
  // useWeb3React,
  // UnsupportedChainIdError,
} from '@web3-react/core';
// import {
//   NoEthereumProviderError,
//   UserRejectedRequestError as UserRejectedRequestErrorInjected,
// } from '@web3-react/injected-connector';
// import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
import { Web3Provider } from '@ethersproject/providers';
import { translationMessages } from './i18n';
// eslint-disable-next-line import/first
import configureStore from './configureStore';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { avalanche, goerli, mainnet, optimism } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, optimism, avalanche],
  [
    // alchemyProvider({ apiKey: serverRuntimeConfig.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    // infuraProvider({ apiKey: process.env.INFURA_API_KEY }),
    publicProvider(),
  ],
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    // new MetaMaskConnector({
    //   chains,
    //   options: {
    //     UNSTABLE_shimOnConnectSelectAccount: true,
    //   },
    // }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'wagmi',
    //   },
    // }),

  ],
  publicClient,
  webSocketPublicClient,
});
// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const theme = createTheme({
  typography: {
    fontFamily: [
      // 'M PLUS 1p',
      // 'Nunito',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',

      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
  },
});

const render = messages => {
  ReactDOM.render(
    <WagmiConfig config={config}>
      <Provider store={store}>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <Web3ReactProvider getLibrary={getLibrary}>
                <App />
              </Web3ReactProvider>
            </ThemeProvider>
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>
    </WagmiConfig>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }
