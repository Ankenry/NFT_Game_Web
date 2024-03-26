import axios from 'axios';
import { getToken } from './tokenProvider';

const GetNftPacks = async (gameID, userID) => {
  try {
    const getData = {
      game_id: gameID,
      user_id: userID,
    };

    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.BASE_URL_API}` + '/game-nft-collection/nft-packs',
      {
        params: getData,
        headers: headers,
      },
    );
    if (response.status === 200) {
      // setNftItem(response.data.data.records);
      return response.data.data.records;
      // console.log(response.data.data.records);
    } else {
      console.log('Get NFT By User Failure');
    }
  } catch (error) {
    console.error('Error Fetch Data:', error);
  }
};
export default GetNftPacks;
