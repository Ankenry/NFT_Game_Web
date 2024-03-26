import React from 'react';
import newImg from '../../../images/gameNft/new.png';
const RenderNftPacks = ({ item, hand }) => {
  return (
    <div className="c-nft-card">
      <figure className="c-nft-card__thumb">
        <img src={item.thumbnail} />
      </figure>
      {item.status === 'NEW' ? (
        <i className="c-nft-card__badge">
          <img src={newImg} />
        </i>
      ) : null}
      <p className="c-nft-card__ttl c-nft-card__l-bottom">
        {item.fullname}
      </p>
      <a
        className="btn-primary__small"
        // href="#link-modal-opened"
        // onClick={() => hand(item.id, item.thumbnail)}
      >
        開封する
      </a>
    </div>
  );
};
export default RenderNftPacks;
