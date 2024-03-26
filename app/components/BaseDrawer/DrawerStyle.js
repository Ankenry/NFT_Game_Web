import styled from 'styled-components';

const DrawerStyle = styled.div`
  .demoItem {
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;
    box-shadow: none;
    @media screen and (max-width: 1280px) {
      padding: 1rem;
    }
  }
  .searchInputDrawer {
    margin-top: 24px;
  }

  .searchInputDrawer div {
    border-radius: 20px;
    background-color: #fafafa;
    height: 40px;
  }

  .searchInputDrawer fieldset {
    border: none;
  }

  .searchInputDrawer:not(:focus-within) div {
    background-color: #fafafa;
  }

  .searchInputDrawer.focused div {
    background-color: #f0f3f5 !important;
  }

  .searchInputDrawer .Mui-focused {
    background-color: #fafafa;
    fieldset {
      border: 2px solid #004b9e !important;
      border-radius: 20px;
    }
    svg > path {
      fill: #004b9e !important;
    }
  }

  .connectBtn {
    font-size: 14px !important;
    font-weight: bold;
  }
  .itemList:hover {
    background-color: #edf2f8;
  }
  .itemButton {
    padding-left: 8px;
  }
  .itemButton:hover {
    background: none;
  }
  .demoItemMobile {
    margin: 16px 16px 0;
    padding: 16px 20px;
    .title {
      color: #707070;
      font-size: 12px;
    }
    .dropdown {
      margin-top: 4px;
      fieldset {
        border: 1px solid #bebec3;
      }
      .itemButton {
        padding: 0;
      }
      @media screen and (max-width: 600px) {
        flex-direction: unset;
        justify-content: space-between;
        .MuiInputBase-root {
          width: 100%;
        }
      }
    }
  }
  .exItem {
    // padding: 0 0 0 40px;
    margin: 0 40px;
    padding: 0;
    border-left: 4px solid #e2e2e2;
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
  }
  .subItem span {
  }
  .exItem:hover {
    background-color: #edf2f8;
    .subItem span {
      color: #004b9e;
      font-weight: 600;
    }
  }
  .activeItem {
    border-left: 4px solid #004b9e !important;
  }
  .itemWalletEx {
    width: 100%;
  }
`;

export default DrawerStyle;
