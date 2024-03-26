import React, { useEffect } from 'react';
import axios from 'axios';
import { getToken } from './tokenProvider';
import { useSelector } from 'react-redux';

const GetNftByUser = async (game_id, user_id) => {
  try {
    const getData = {
      game_id: game_id,
      user_id: user_id,
    };

    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.BASE_URL_API}` + '/game-nft-collection/nft-by-user',
      {
        params: getData,
        headers: headers,
      },
    );
    if (response.status === 200) {
      // setNftItem(response.data.data.records);
      return response.data.data.records;
    } else {
      console.log('Get NFT By User Failure');
    }
  } catch (error) {
    console.error('Error Fetch Data:', error);
  }
};
export default GetNftByUser;
