import React, { useEffect } from 'react';
import axios from 'axios';
import { getToken } from './tokenProvider';

const GetNftCompound = async (GameID) => {
  try {
    const getData = {
      game_id: GameID,
    };

    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.BASE_URL_API}` + '/game-nft-collection/nft-compound',
      {
        params: getData,
        headers: headers,
      },
    );
    if (response.status === 200) {
    //   setNftItem(response.data.data.records);
        // console.log(response.data.data.records.burn_nft_items)
        return response.data.data.records;
    } else {
      console.log('Get NFT Compound Failure');
    }
  } catch (error) {
    console.error('Error Fetch Data:', error);
  }
};
export default GetNftCompound;
