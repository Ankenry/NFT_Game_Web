/**
 *
 * NftPack
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link, Tooltip } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import history from 'utils/history';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import makeSelectIndexPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import BaseButton from '../../components/BaseButton';
import NftPackStyle from './NftPackStyle';
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { Grid } from '@mui/material';

import imageDemo from '../../images/gameNft/image_demo.png';
import ConfirmYesNo from '../../components/ConfirmYesNo';

export function NftPack() {
  const [visibleNftPack, setVisibleNftPack] = useState(false);

  const handleNftPack = () => {
    setVisibleNftPack(false);
  };

  return (
    <NftPackStyle>
      <div className="container-game-nft">
        <div className="container">
          <div className="title">Can you open the following Pack?</div>
          <div className="game-nft">
            <div className="game-nfy-img">
              <img src={imageDemo} alt="game-nft" />
            </div>
          </div>
          <div className="game-nft-btn">
            <BaseButton
              className="btn-ntf"
              text="Open"
              type="primary"
              width="40vh"
              onClick={() => {
                setVisibleNftPack(true);
              }}
            />
          </div>
          <div className="nft-content">
            <Grid container className="nft-list">
              <Grid item xs={3} sm={3} className="nft-item">
                <div className="nft-image" />
                <div className="nft-name">[R] Name A</div>
              </Grid>
              <Grid item xs={3} sm={3} className="nft-item">
                <div className="nft-image" />
                <div className="nft-name">[R] Name B</div>
              </Grid>
              <Grid item xs={3} sm={3} className="nft-item">
                <div className="nft-image" />
                <div className="nft-name">[R] Name C</div>
              </Grid>
              <Grid item xs={3} sm={3} className="nft-item">
                <div className="nft-image" />
                <div className="nft-name">[N] Name D</div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <ConfirmYesNo
        visible={visibleNftPack}
        onClose={() => setVisibleNftPack(false)}
        onConfirm={handleNftPack}
        content="Exchange the selected NFTs for [SR] Name E.Are you sure?"
      />
    </NftPackStyle>
  );
}

const mapStateToProps = createStructuredSelector({
  indexPage: makeSelectIndexPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(NftPack);
