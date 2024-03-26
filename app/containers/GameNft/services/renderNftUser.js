import React from 'react';
import newImg from '../../../images/gameNft/new.png';
const RenderNftUser = ({ item, index }) => {
  return (
    <div className="c-nft-card">
      <figure className="c-nft-card__thumb">
        <img src={item.thumbnail_url} alt={`Thumbnail ${index}`} />
      </figure>
      {item.status === 'NEW' ? (
        <i className="c-nft-card__badge">
          <img src={newImg} />
        </i>
      ) : null}

      {/* {item.rarity} */}
      {item.rarity === 1 ? (
        <p className="label-nft label-nft--normal">N</p>
      ) : item.rarity === 2 ? (
        <p className="label-nft label-nft--rare">R</p>
      ) : item.rarity === 3 ? (
        <p className="label-nft label-nft--super-rare">SR</p>
      ) : null}

      <p className="c-nft-card__ttl c-nft-card__l-top">{item.name}</p>
    </div>
  );
};
export default RenderNftUser;
