import styled from 'styled-components';

const BaseButtonStyle = styled.div`
  .btnBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    button {
      color: #ffffff;
      font-size: 14px;
      border-radius: 30px;
      padding: 7px 0px;
      background: #004b9e;
      border: 5px solid #ccdbec;
      text-transform: none;
      ${'' /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
        0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1); */}
      box-shadow: none !important;
      @media screen and (max-width: 1280px) {
        font-size: 10px;
      }
      @media screen and (max-width: 600px) {
        padding: 6px 16px;
        font-size: 12px;
      }
      @media screen and (max-width: 370px) {
        padding: 6px;
        font-size: 12px;
      }
      @media screen and (max-width: 280px) {
        padding: 6px;
        font-size: 1.75rem;
      }
    }
    button:hover {
      border: 5px solid #004b9e;
    }
  }
  .btnBoxBorder {
    button {
      color: #004b9e;
      width: 224px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 50px;
      background: #fff;
      border: 2px solid #004b9e;
      text-transform: none;
      padding: 10px 0px;
      ${'' /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
        0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1); */}
      box-shadow: none !important;
      @media screen and (max-width: 600px) {
        width: fit-content;
        font-size: 12px;
      }
      @media screen and (max-width: 280px) {
        padding: 6px;
        font-size: 0.4rem;
      }
    }
    button:hover {
      border: 2px solid #004b9e;
      background-color: #eff4f9;
    }
  }
  .btnBoxNone {
    button {
      color: #707070;
      width: 224px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 50px;
      background-color: #eff4f9;
      border: 2px solid #eff4f9;
      text-transform: none;
      padding: 10px 0px;
      ${'' /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
        0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1); */}
      box-shadow: none !important;
      @media screen and (max-width: 600px) {
        width: fit-content;
        font-size: 12px;
      }
      @media screen and (max-width: 280px) {
        padding: 6px;
        font-size: 0.4rem;
      }
    }
    button:hover {
      border: 2px solid #004b9e;
    }
  }
`;

export default BaseButtonStyle;
