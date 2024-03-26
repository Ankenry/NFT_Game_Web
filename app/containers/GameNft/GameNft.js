/**
 *
 * GameNft
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectIndexPage from './selectors';
import GameNftStyle from './GameNftStyle';
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import ttl_nft_collection from '../../images/gameNft/ttl-nft-collection.png';
import img_nft_01 from '../../images/gameNft/img-nft-01.png';
import newImg from '../../images/gameNft/new.png';
import bnr_bcgp from '../../images/gameNft/bnr-bcgp.png';
import carousel_arrow_left from '../../images/gameNft/carousel-arrow-left.png';
import carousel_arrow_right from '../../images/gameNft/carousel-arrow-right.png';

import { useHistory } from 'react-router-dom';
import GetNftByUser from './services/getNftByUser';
import GetNftPacks from './services/getNftPacks';
import GetNftItemByPack from './services/getNftItemByPackId';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import LoginVerify from './services/loginVerify';;
import GetNftCompound from './services/getNftCompound';
import RenderNftUser from './services/renderNftUser';
import RenderNftPacks from './services/renderNftPacks';

export function GameNft() {
  const [isOpenModalExChange, setIsOpenModalExChange] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalComplete, setIsOpenModalComplete] = useState(false);

  const [
    isOpenModalExChangeComplete,
    setIsOpenModalExChangeComplete,
  ] = useState(false);

  const [isOpenModalExChangeResult, setIsOpenModalExChangeResult] = useState(
    false,
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPackID, setcurrentPackID] = useState();
  const [currentPackImage, setcurrentPackImage] = useState();
  const [nftItemId, setNftItemId] = useState();

  const history = useHistory();

  const handleOpenModal = (idPack, imagePack) => {
    setcurrentPackID(idPack);
    setcurrentPackImage(imagePack);
    history.push('/#link-modal-opened');
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    history.push({
      pathname: '/',
      search: `?v=${saveVerify}`
    });
    setIsOpenModal(false);
  };

  const handleOpenModalComplete = async pack_id => {
    history.push('/#link-modal-opened-complete');
    const nftItem = await GetNftItemByPack(pack_id);
    setNftItemId(nftItem);
    setIsOpenModalComplete(true);
  };

  const handleOpenModalExchange = () => {
    history.push('/#link-modal-exchange');
    setIsOpenModalExChange(true);
  };

  const handleCloseModalExchange = () => {
    history.push({
      pathname: '/',
      search: `?v=${saveVerify}`
    });
    setIsOpenModalExChange(false);
  };

  const plusSlides = step => {
    const newSlide = currentSlide + step;
    const totalSlides = slides.length;

    if (newSlide >= 0 && newSlide < totalSlides) {
      setCurrentSlide(newSlide);
    }
  };

  const handleOpenModalExchangeComplete = () => {
    history.push('/#link-modal-exchange-complete');
    setIsOpenModalExChangeComplete(true);
  };

  const handleCloseModalExchangeComplete = () => {
    history.push('/#link-modal-exchange');
    setIsOpenModalExChangeComplete(false);
  };

  const handleOpenModalExchangeResult = () => {
    history.push('/#link-modal-exchange-result');
    setIsOpenModalExChangeResult(true);
  };

  const [nftPacks, setNftPacks] = useState([]);
  const [nftItems, setNftItem] = useState([]);
  const [nftCompoundBurn, setNftCompoundBurn] = useState([]);
  const [nftCompoundItems, setNftCompoundItems] = useState();

  const fetchDataNftByUser = async (gameID, userID) => {
    const records = await GetNftByUser(gameID, userID);
    setNftItem(records);
  };

  const fetchDataNftPacks = async (gameID, userID) => {
    const records = await GetNftPacks(gameID, userID);
    setNftPacks(records);
  };

  const fetchDataNftCompoundItem = async (GameID) => {
    const records = await GetNftCompound(GameID);
    setNftCompoundItems(records.nft_item);
  };

  const fetchDataNftCompoundBurn = async (GameID) => {
    const records = await GetNftCompound(GameID);
    setNftCompoundBurn(records.burn_nft_items);
  };

  const [saveVerify, setSaveVerify] = useState()

  const fetchData = async () => {
    var isExpired = false;
    const itemStr = localStorage.getItem('s');
    if (itemStr == undefined || itemStr == '') {
      isExpired = true;
    } else {
      const loginSession = JSON.parse(itemStr);
      const currentDate = Date.now();
      const thirtyMinutesAgo = new Date(loginSession.time - 30 * 60 * 1000);

      if (currentDate > thirtyMinutesAgo) {
        isExpired = true;
      }
    }
    if (isExpired) {
      const urlParams = new URLSearchParams(window.location.search);
      const queryParams = Object.fromEntries(urlParams.entries());
      setSaveVerify(queryParams.v);
      const loginVerify = await LoginVerify(queryParams.v);
      fetchDataNftByUser(loginVerify.app_id, loginVerify.user_id);
      fetchDataNftPacks(loginVerify.app_id, loginVerify.user_id);
      fetchDataNftCompoundItem(loginVerify.app_id);
      fetchDataNftCompoundBurn(loginVerify.app_id);
      if (loginVerify == undefined || loginVerify.status != 'SUCCESS') {
        window.location.href = process.env.BASE_URL_LOGIN_BACK;
      }

      var loginSession = {
        time: Date.now(),
        address: loginVerify.address,
        app_id: loginVerify.app_id,
        user_id: loginVerify.user_id,
      };

      localStorage.setItem('s', JSON.stringify(loginSession));
    }
    // fetchDataNftByUser(gameID, userID);
    
    
  };

  useEffect(async () => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      handleOpenModalComplete(currentPackID);
    }
  }, [isOpenModal]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // const pageCount = Math.ceil(nftItems.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = nftItems.slice(startIndex, endIndex);

  return (
    <GameNftStyle>
      <div className="c-nft-coll">
        <ul className="c-nft-coll__list">
          <li>
            <div className="c-nft-nav">
              <img
                className="c-nft-nav__ttl"
                src={ttl_nft_collection}
                alt="NFT COLLECTION"
              />
              <ul className="c-nft-nav__label-list">
                <li>
                  <p className="label-nft label-nft--normal">N</p>
                  <p className="label-nft__name">ノーマル</p>
                </li>
                <li>
                  <p className="label-nft label-nft--rare">R</p>
                  <p className="label-nft__name">レア</p>
                </li>
                <li>
                  <p className="label-nft label-nft--super-rare">SR</p>
                  <p className="label-nft__name">スーパーレア</p>
                </li>
              </ul>
              <div className="c-nft-nav__l-btn">
                <a
                  className="btn-primary__medium"
                  href="#link-modal-exchange"
                  onClick={handleOpenModalExchange}
                >
                  SR NFT と交換する
                </a>
              </div>
            </div>
          </li>
          {/* User Item */}
          {nftItems.slice(0,3).map((nftItem, index) => (
            <li key={index}>
              <RenderNftUser item={nftItem} index={index}/>
            </li>
          ))}

          {/* Packs Items */}
          {nftPacks.slice(0, 3).map((nftPacks, index) => (
            <li key={index}>
              <RenderNftPacks item={nftPacks} hand={handleOpenModal}/>
            </li>
          ))}

          {/* User Item */}
          {nftItems.slice(4,5).map((nftItem, index) => (
            <li key={index}>
              <RenderNftUser item={nftItem} index={index}/>
            </li>
          ))}
        </ul>

        {/* Paginate */}
        <div className="c-nft-page">
          {/* <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              color="primary"
            />
          </Stack> */}
        </div>

        <div>
          <a href="#">
            <img src={bnr_bcgp} />
          </a>
        </div>
      </div>

      {isOpenModal && (
        <>
          <div className="modal-wrapper" id="link-modal-opened">
            <a href="#!" className="modal-overlay" />
            <div className="modal-window">
              <div className="c-nft-modal__body">
                <h2 className="c-nft-modal__ttl">開封してもよろしいですか？</h2>
                <p className="c-nft-modal__lead">
                  開封するとパックNFTは消滅し、キャラクターNFT
                  <span>【1枚】</span>を獲得します。
                  <br />
                  パックの中身は開封するまでのお楽しみです。
                </p>
                <div className="c-nft-modal__content">
                  <h2 className="c-nft-modal__ttl">リリース記念パック</h2>
                  <figure className="c-nft-modal__img">
                    <img src={currentPackImage} />
                  </figure>
                </div>
                <div className="c-nft-modal__l-btn">
                  <a
                    className="btn-secondary__medium btn-modal-close"
                    onClick={handleCloseModal}
                  >
                    キャンセル
                  </a>
                  <a
                    className="btn-primary__medium"
                    // href="#link-modal-opened-complete"
                    // onClick={() => handleOpenModalComplete(currentPackID)}
                  >
                    開封する
                  </a>
                </div>
              </div>
              <a className="modal-close" onClick={handleCloseModal}>
                ×
              </a>
            </div>
          </div>
        </>
      )}

      {isOpenModalComplete && (
        <div className="modal-wrapper" id="link-modal-opened-complete">
          <a href="#!" className="modal-overlay" />
          <div
            className="modal-window"
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
          >
            <div className="c-nft-modal__body">
              <p className="c-nft-modal__result-ttl">
                {nftItemId.name}
                <br />
                獲得しました！
              </p>
              <div className="c-nft-card c-nft-modal__opened-complete">
                <figure className="c-nft-card__thumb">
                  <img src={nftItemId.thumbnail} />
                </figure>
                {nftItemId.rarity === 1 ? (
                  <p className="label-nft label-nft--normal">N</p>
                ) : nftItemId.rarity === 2 ? (
                  <p className="label-nft label-nft--rare">R</p>
                ) : nftItemId.rarity === 3 ? (
                  <p className="label-nft label-nft--super-rare">SR</p>
                ) : null}
                <p className="c-nft-card__ttl c-nft-card__l-top">
                  {nftItemId.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpenModalExChange && (
        <div className="modal-wrapper" id="link-modal-exchange">
          <a href="#!" className="modal-overlay" />
          <div className="modal-window">
            <div className="c-nft-modal__body">
              <h2 className="c-nft-modal__ttl">交換するNFT(2/6)</h2>
              <div />
              <div className="slideshow-container">
                <div className="c-nft-media">
                  <figure className="c-nft-media__img">
                    <img src={nftCompoundItems.thumbnail_url} />
                  </figure>
                  <div className="c-nft-media__content">
                    <h2 className="c-nft-media__ttl">
                      {nftCompoundItems.rarity === 1 ? (
                        <span className="label-nft label-nft--normal">N</span>
                      ) : nftCompoundItems.rarity === 2 ? (
                        <span className="label-nft label-nft--rare">R</span>
                      ) : nftCompoundItems.rarity === 3 ? (
                        <span className="label-nft label-nft--super-rare">
                          SR
                        </span>
                      ) : null}
                      {nftCompoundItems.name}
                    </h2>
                    <p className="c-nft-media__text">
                      {nftCompoundItems.description}
                    </p>
                  </div>
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}>
                  <img src={carousel_arrow_left} />
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                  <img src={carousel_arrow_right} />
                </a>
              </div>

              <div className="c-nft-modal__item">
                <h2 className="c-nft-modal__ttl">
                  交換には以下の素材NFTが必要です
                </h2>
                <ul className="slide-wrap">
                  {nftCompoundBurn.map((itemCompound) => (
                    <li>
                      <div
                        className={
                          nftItems.find(nftItem => nftItem.id === itemCompound.id)
                            ? 'c-nft-card'
                            : 'c-nft-card c-nft-card--gray'
                        }
                      >
                        <figure className="c-nft-card__thumb">
                          <img src={itemCompound.thumbnail_url} />
                        </figure>
                        <p className="c-nft-card__ttl c-nft-card__l-top">
                          {itemCompound.rarity === 1 ? (
                            <span className="label-nft label-nft--normal">
                              N
                            </span>
                          ) : itemCompound.rarity === 2 ? (
                            <span className="label-nft label-nft--rare">R</span>
                          ) : itemCompound.rarity === 3 ? (
                            <span className="label-nft label-nft--super-rare">
                              SR
                            </span>
                          ) : null}
                          {itemCompound.name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="c-nft-modal__l-btn">
                <a
                  className="btn-secondary__medium btn-modal-close"
                  onClick={handleCloseModalExchange}
                >
                  キャンセル
                </a>
                <a
                  className="btn-primary__medium"
                  // href="/#link-modal-exchange-complete"
                  // onClick={handleOpenModalExchangeComplete}
                >
                  交換する
                </a>
              </div>
            </div>
            <a onClick={handleCloseModalExchange} className="modal-close" >
              ×
            </a>
          </div>
        </div>
      )}
      {isOpenModalExChangeComplete && (
        <div className="modal-wrapper" id="link-modal-exchange-complete">
          <a href="#!" className="modal-overlay" />
          <div className="modal-window modal-window--small">
            <div className="c-nft-modal__body">
              <h2 className="c-nft-modal__ttl">
                $NFT名 と交換します。
                <br />
                よろしいですか？
              </h2>
              <p className="c-nft-modal__lead">
                交換すると交換元の素材NFTは消滅します
              </p>
              <div className="c-nft-modal__l-btn-default">
                <a
                  id="js-result-animation"
                  className="btn-primary__medium"
                  href="#link-modal-exchange-result"
                  onClick={handleOpenModalExchangeResult}
                >
                  はい
                </a>
                <a
                  className="btn-secondary__medium btn-modal-close"
                  onClick={handleCloseModalExchangeComplete}
                >
                  いいえ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenModalExChangeResult && (
        <div
          className="modal-wrapper modal-animation-wrapper"
          id="link-modal-exchange-result"
        >
          <a href="#!" className="modal-overlay" />

          <div className="modal-animation-window opening-animation">
            <div className="c-nft-modal__body">
              <iframe
                src="js/boxOpenEffect2.html"
                width="960"
                height="780"
                scrolling="no"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          <div className="modal-animation-window result-animation">
            <div className="c-nft-modal__body">
              <div className="c-nft-iframe">
                <iframe
                  src="js/boxEffect1.html"
                  width="960"
                  height="780"
                  scrolling="no"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="c-nft-card c-nft-modal__result">
                <figure className="c-nft-card__thumb">
                  <img src={img_nft_01} />
                </figure>
                <p className="label-nft label-nft--normal">N</p>
                <p className="c-nft-card__ttl c-nft-card__l-top">カッパ</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </GameNftStyle>
  );
}

const stylePaginate = {
  display: 'flex',
  gap: '20px',
};

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

export default compose(withConnect)(GameNft);
