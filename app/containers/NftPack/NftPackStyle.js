import styled from 'styled-components';

const NftPackStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 100vh;
    height: 70vh;
    background-color: #d7d7d7;
    border-radius: 3px;
    border: 1px solid #9f9f9f;
    .title {
      width: 100%;
      height: 5vh;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      margin-top: 5vh;
    }
    .game-nft {
      margin: 5vh 5vh 1vh 5vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5vh;
      .game-nfy-img {
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        img {
          width: 30%;
          height: 100%;
        }
      }
    }
    .game-nft-btn {
      margin: 20px;
      .btn-ntf {
        background-color: #fd9631;
      }
      .btn-ntf:hover {
        border: 5px solid #fd9631;
      }
    }
    .nft-content {
      width: 90vh;
      height: 16vh;
      margin: 0 5vh 1vh;
      border: 1px solid #9f9f9f;
      border-radius: 10px;
      padding: 2vh 1vh 0;
      background: #ffffff;
      .nft-list {
        .nft-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .nft-image {
            width: 60px;
            height: 60px;
            background-color: #4ec806;
          }
          .nft-name {
            margin-top: 1vh;
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }
  }
`;

export default NftPackStyle;
