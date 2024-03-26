/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import GameNft from 'containers/GameNft/Loadable';
import Compound from 'containers/Compound/Loadable';
import NftPack from 'containers/NftPack/Loadable';
import GlobalStyle from '../../global-styles';
import reducer from './reducer';
import saga from './saga';

import BaseToast from '../../components/BaseToast';

export default function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });

  return (
    <div>
      <BaseToast />
      <div style={{ minHeight: '55vh' }}>
        <Switch>
          <Route path="/" exact component={GameNft} />
          <Route path="/compound" exact component={Compound} />
          <Route path="/nft-pack" exact component={NftPack} />
        </Switch>
      </div>
      <GlobalStyle />
    </div>
  );
}
