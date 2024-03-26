import axios from 'axios';
import { getToken } from './tokenProvider';

const GetNftGameById = async Id => {
  try {
    // console.log(Id)
    const getData = {
      nft_id: Id,
    };

    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.BASE_URL_API}` + '/game-nft-collection/nft-item-by-id',
      {
        params: getData,
        headers: headers,
      },
    );
    if (response.status === 200) {
      // setNftItem(response.data.data.records);
      // console.log(response.data);
      return response.data.data;

      //   console.log(response.data.data.records);
    } else {
      console.log('Get NFT By User Failure');
    }
  } catch (error) {
    console.error('Error Fetch Data:', error);
  }
};

const GetNftItemByPack = async () => {
  try {
    const getData = {
      pack_id: 1,
    };

    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.BASE_URL_API}` + '/game-nft-collection/nft-item-by-pack',
      {
        params: getData,
        headers: headers,
      },
    );
    if (response.status === 200) {
      const result = await GetNftGameById(response.data.nft_item_id);
      return result;
      //   console.log(response.data.data.records);
    } else {
      console.log('Get NFT By User Failure');
    }
  } catch (error) {
    console.error('Error Fetch Data:', error);
  }
};
export default GetNftItemByPack;
