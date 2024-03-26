import styled from 'styled-components';

const GameNftStyle = styled.div`
  color: #333;
  font-size: 12px;
  line-height: 1.6em;
  width: 1000px;
  background-color: #f2f2f2;
  margin: 0 auto;
  .c-nft-coll {
    background-color: #fff;
    padding: 24px;
  }

  .c-nft-coll__list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 16px;
  }

  .c-nft-coll__list > li:nth-of-type(1) {
    flex-basis: 371px;
  }

  .c-nft-coll__list > li {
    width: calc((100% - 64px) / 5);
  }

  .c-nft-nav {
    padding: 16px;
  }

  .c-nft-nav__ttl {
    display: block;
    font-size: 32px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
  }

  .c-nft-nav__label-list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  .c-nft-nav__label-list > li {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .c-nft-nav__label-list > li:not(:last-child) {
    margin-right: 8px;
  }

  .label-nft {
    padding: 4px;
    line-height: 1;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 4px;
  }

  .label-nft--normal {
    background-color: #00b4d8;
  }

  .label-nft--rare {
    background-color: #f5a22f;
  }

  .label-nft--super-rare {
    background-color: #f07a23;
  }

  .label-nft__name {
    font-size: 12px;
  }

  /* btn */
  .btn-primary__medium {
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    min-width: 96px;
    border-radius: 8px;
    background-color: #0086e5;
    color: #fff;
    cursor: pointer;
  }

  .btn-primary__medium:hover {
    background-color: #0074d2;
  }

  .btn-primary__small {
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    min-width: 96px;
    border-radius: 8px;
    background-color: #0086e5;
    color: #fff;
    cursor: pointer;
  }

  .btn-primary__small:hover {
    background-color: #0074d2;
  }

  .btn-secondary__medium {
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    min-width: 96px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #0086e5;
    color: #0086e5;
    cursor: pointer;
  }

  .btn-secondary__medium:hover {
    background-color: #fff;
    border: 1px solid #0074d2;
    color: #0074d2;
  }

  /* card */
  .c-nft-card {
    border: 1px solid #ddd;
    padding: 8px;
    position: relative;
    text-align: left;
    background-color: #fff;
  }

  .c-nft-card__thumb {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .c-nft-card--gray {
    background-color: #8b8b8b;
    filter: grayscale(100%);
  }

  .c-nft-card__ttl {
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .c-nft-card__l-top {
    margin-top: 4px;
  }

  .c-nft-card__l-bottom {
    margin-bottom: 4px;
  }

  .c-nft-card__badge {
    position: absolute;
    top: 9px;
    left: 9px;
    width: 42px;
  }

  .c-nft-page {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
  }

  .c-nft-page {
    color: #0086e5;
  }

  .c-nft-page__active {
    font-weight: bold;
    color: #333;
    pointer-events: none;
  }

  /* モーダル */
  .modal-wrapper {
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px 10px;
    text-align: center;
  }

  .modal-wrapper:not(:target) {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .modal-wrapper:target {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.4s, visibility 0.4s;
  }

  .modal-wrapper::after {
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    vertical-align: middle;
    content: '';
  }

  .modal-wrapper .modal-window {
    box-sizing: border-box;
    display: inline-block;
    z-index: 20;
    position: relative;
    max-width: 820px;
    padding: 40px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    vertical-align: middle;
  }

  .modal-wrapper .modal-window .modal-content {
    max-height: 80vh;
    overflow-y: auto;
  }

  .modal-overlay {
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-wrapper .modal-close {
    z-index: 20;
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    color: #95979c !important;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
  }

  .modal-wrapper .modal-close:hover {
    color: #2b2e38;
    cursor: pointer;
  }

  .c-nft-modal__l-btn {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-top: 24px;
  }

  .c-nft-modal__l-btn-default {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-direction: column;
  }

  .c-nft-modal__l-btn > a {
    width: 310px;
  }

  .c-nft-modal__item {
        background-image: url(../img/bg-sky.png);
        background-repeat: no-repeat;
        background-size: 788px;
        background-position: center;
    }

    .c-nft-modal__opened-complete {
        margin: 0 auto;
        width: 200px;
    }

    .c-nft-modal__result {
        position: absolute;
        width: 200px;
        height: auto;
        top: 72%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .c-nft-modal__result-ttl {
        color: #fff;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin-bottom: 24px;
        line-height: 1.4;
    }

    .modal-animation-window {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .modal-animation-window.active {
        display: block;
    }

    /* media */
    .c-nft-media {
        border: 1px solid #ddd;
        padding: 8px;
        position: relative;
        display: flex;
        gap: 8px;
        width: 560px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 4px;
    }

    .c-nft-media__content {
        text-align: left;
        flex: 1;
    }

    .c-nft-media__ttl {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .c-nft-media__text {
        font-size: 16px;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* 任意の行数を指定 */
        height: 103px;
    }

    .c-nft-media__img {
        width: 160px;
        height: 160px;
    }

    .c-nft-media__l-top {
        margin-top: 4px;
    }

    .c-nft-media__l-bottom {
        margin-bottom: 4px;
    }

    .c-nft-media__badge {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 42px;
    }

    /* スライドショー */
    .slideshow-container {
        position: relative;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
    }

    .mySlides {
        display: none;
    }

    .mySlides img {
        width: 100%;
        height: auto;
    }

    .prev, .next {
        position: absolute;
        top: 40%;
        width: 32px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }

    .prev:hover, .next:hover {
        background-color:transparent;
    }

    .prev {
        left: 20px;
    }

    .next {
        right: 20px;
    }

    /* 横スクロール */
    .slide-wrap {
        overflow-x: scroll;
        width: 740px;
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-start;
        margin-left: auto;
        margin-right: auto;
        gap: 8px;
    }

    .slide-wrap > li {
        flex-shrink: 0;
        list-style: none;
    }

    .slide-wrap > li:first-child {
        padding-left: 16px;
    }

    .slide-wrap > li:last-child {
        padding-right: 16px;
    }

    .slide-wrap .c-nft-card {
        width: 116px;
        height: 148px;
    }

    .c-nft-iframe {
        position:relative;
        width: 700px;
        height: auto;
        z-index: 1;
        min-width: 700px;
    }

    .c-nft-iframe > iframe {
        aspect-ratio: 240 / 195;
        width: 100%;
        height: 100%;
        border: none;
    }
}

/* SP */
@media screen and (max-width: 767px) {
    body {
        color: #333;
        font-size: 12px;
        line-height: 1.6em;
        width: 100%;
        background-color: #F2F2F2;
        margin: 0 auto;
    }

    .sp-display-none {
        display: none;
    }

    .c-nft-coll {
        background-color: #fff;
        padding: 8px;
    }

    .c-nft-coll__list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        list-style-type: none;
        gap: 8px;
    }

    .c-nft-coll__list > li:nth-of-type(1) {
        width: 100%;
    }

    .c-nft-coll__list > li {
        width: calc((100% - 8px) / 2);
    }

    .c-nft-nav {
        margin-bottom: 16px;
    }

    .c-nft-nav__ttl {
        display: block;
        font-size: 32px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6px;
    }

    .c-nft-nav__label-list {
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
    }

    .c-nft-nav__label-list > li {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .c-nft-nav__label-list > li:not(:last-child){
        margin-right: 8px;
    }

    .label-nft {
        padding: 4px;
        line-height: 1;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
        display: inline-block;
        margin-right: 4px;
    }

    .label-nft--normal {
        background-color: #00B4D8;
    }

    .label-nft--rare {
        background-color: #F5A22F;
    }

    .label-nft--super-rare {
        background-color: #F07A23;
    }

    .label-nft__name {
        font-size: 12px;
    }

    /* btn */
    .btn-primary__medium {
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 52px;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        border-radius: 8px;
        background-color: #0086e5;
        color: #fff;
        cursor : pointer;
    }

    .btn-primary__medium:hover {
        background-color: #0074D2;
    }

    .btn-primary__small {
        font-weight: bold;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        min-width: 96px;
        border-radius: 8px;
        background-color: #0086e5;
        color: #fff;
        cursor : pointer;
    }

    .btn-primary__small:hover {
        background-color: #0074D2;
    }

    .btn-secondary__medium {
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 90%;
        border-radius: 8px;
        background-color: #fff;
        border: 1px solid #0086e5;
        color: #0086e5;
        cursor : pointer;
    }

    .btn-secondary__medium:hover {
        background-color: #fff;
        border: 1px solid #0074D2;
        color: #0074D2;
    }

    /* card */
    .c-nft-card {
        border: 1px solid #ddd;
        padding: 8px;
        position: relative;
        text-align: left;
        background-color: #fff;
    }

    .c-nft-card--gray {
        background-color: #8B8B8B;
        filter: grayscale(100%);
    }

    .c-nft-card__ttl {
        font-size: 14px;
        font-weight: bold;
    }

    .c-nft-card__l-top {
        margin-top: 4px;
    }

    .c-nft-card__l-bottom {
        margin-bottom: 4px;
    }

    .c-nft-card__badge {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 42px;
    }

    .c-nft-page {
        display: flex;
        gap: 8px;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 16px;
        align-items: center;
        justify-content: center;
    }

    .c-nft-page {
        color: #0086E5;
    }

    .c-nft-page__active {
        font-weight: bold;
        color: #333;
        pointer-events: none;
    }

    /* モーダル */
    .modal-wrapper {
        z-index: 999;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 40px 10px;
        text-align: center;
    }

    .modal-wrapper:not(:target) {
        opacity: 0;
        visibility: hidden;
        transition: opacity .3s, visibility .3s;
    }

    .modal-wrapper:target {
        opacity: 1;
        visibility: visible;
        transition: opacity .4s, visibility .4s;
    }

    .modal-wrapper::after {
        display: inline-block;
        height: 100%;
        margin-left: -.05em;
        vertical-align: middle;
        content: "";
    }

    .modal-wrapper .modal-window {
        box-sizing: border-box;
        display: inline-block;
        z-index: 20;
        position: relative;
        padding: 16px;
        border-radius: 2px;
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, .6);
        vertical-align: middle;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal-wrapper .modal-window .modal-content {
        max-height: 80vh;
        overflow-y: auto;
    }

    .modal-overlay {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, .8);
    }

    .modal-wrapper .modal-close {
        z-index: 20;
        position: absolute;
        top: 0;
        right: 0;
        width: 35px;
        color: #95979c !important;
        font-size: 20px;
        font-weight: 700;
        line-height: 35px;
        text-align: center;
        text-decoration: none;
        text-indent: 0;
    }

    .modal-wrapper .modal-close:hover {
        color: #2b2e38;
    }

    /* 小さいモーダル用 */
    .modal-window--small {
        max-width: 470px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal-wrapper {
        z-index: 999;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .modal-animation-window {
        display: inline-block;
        z-index: 20;
        position: relative;
        vertical-align: middle;
    }

    canvas {
        background-color: transparent;
    }

    .modal-opened-wrapper {
        background-color: transparent;
        box-shadow: none;
    }

    /* モーダルの中身 */
    .c-nft-modal {
        display: block;
        margin-right: auto;
        margin-left: auto;
        padding: 40px;
        background-color: #fff;
        width: 820px;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        overflow: auto;
    }

    .c-nft-modal__body {
        text-align: center;
    }

    .c-nft-modal__ttl {
        font-size: 16px;
        margin-bottom: 8px;
        line-height: 1.6;
    }

    .c-nft-modal__lead {
        font-size: 16px;
        margin-bottom: 32px;
        line-height: 1.6;
    }

    .c-nft-modal__lead > span {
        color: #FF3232;
    }

    .c-nft-modal__img {
        width: 160px;
        height: 160px;
        padding: 8px;
        border: 1px solid #eee;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0px 5.088px 5.088px 0px rgba(0, 0, 0, 0.08);
    }

    .c-nft-modal__l-btn {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 16px;
        align-items: center;
    }

    .c-nft-modal__l-btn-default {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-direction: row-reverse;
    }

    .c-nft-modal__l-btn > a {
        width: 310px;
    }

    .c-nft-modal__item {
        background-color: #E0F6FC;
        border-radius: 8px;
        padding: 8px;
    }

    .c-nft-modal__item > .c-nft-modal__ttl {
        font-size: 12px;
    }

    .c-nft-modal__opened-complete {
        margin: 0 auto;
        width: 40%;
    }

    .c-nft-modal__result {
        position: absolute;
        width: 32%;
        height: auto;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .c-nft-modal__result-ttl {
        color: #fff;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin-bottom: 24px;
        line-height: 1.4;
    }

    .modal-animation-window {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .modal-animation-window.active {
        display: block;
    }

    /* media */
    .c-nft-media {
        position: relative;
        display: flex;
        gap: 8px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 4px;
        flex-direction: column;
    }

    .c-nft-media__content {
        text-align: left;
        flex: 1;
    }

    .c-nft-media__ttl {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
        text-align: center;
    }

    .c-nft-media__text {
        font-size: 12px;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* 任意の行数を指定 */
        height: 77px;
    }

    .c-nft-media__img {
        width: 100px;
        height: 100px;
    }

    .c-nft-media__l-top {
        margin-top: 4px;
    }

    .c-nft-media__l-bottom {
        margin-bottom: 4px;
    }

    .c-nft-media__badge {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 42px;
    }

    /* スライドショー */
    .slideshow-container {
        position: relative;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 16px;
    }

    .mySlides {
        display: none;
    }

    img {
        width: 100%;
        height: auto;
    }

    .prev, .next {
        position: absolute;
        top: 20%;
        width: 32px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }

    .prev:hover, .next:hover {
        background-color:transparent;
    }

    .prev {
        left: 20px;
    }

    .next {
        right: 20px;
    }

    /* 横スクロール */
    .slide-wrap {
        overflow-x: scroll;
        display: flex;
        justify-content: flex-start;
        margin-left: auto;
        margin-right: auto;
        gap: 4px;
    }

    .slide-wrap > li {
        flex-shrink: 0;
        list-style: none;
        width: 78px;
    }

    .slide-wrap > li > .c-nft-card {
        padding: 4px;
    }

    .slide-wrap > li > .c-nft-card > .c-nft-card__ttl {
        font-size: 10px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .slide-wrap > li > .c-nft-card > .c-nft-card__l-top > .label-nft {
        font-size: 10px;
    }

    .c-nft-iframe {
        position:relative;
        width: 500px;
        height: 406.25px;
        z-index: 1;
        min-width: 500px;
    }

    .c-nft-iframe > iframe {
        aspect-ratio: 240 / 195;
        width: 100%;
        height: 100%;
        border: none;
    }
    .paginate_group {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
    }
    ul.pagination_container {
        display: flex;
        gap: 20px;
    }
    .pagination_container .next {
        position: unset,
    }
`;

export default GameNftStyle;
