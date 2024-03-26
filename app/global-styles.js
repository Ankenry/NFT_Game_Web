import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    // font-family: 'M PLUS 1p', 'Nunito', Arial, ;
    font-family: sans-serif,Noto Sans JP ;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    // color: #858796;
    color: #000;
  }

  #app {
    // min-height: 100%;
    min-width: 100%;
  }

  .non-touch {
    pointer-events: none;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  a, button {
    &:focus, &:active {
      outline: 0;
    }
  }

  .textUnderline {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .errorText {
    color: red;
    font-size: 11px;
  }

  .whiteBox {
    padding: 1.25rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;
    min-height: 400px;
  }

  .pageTitle {
    color: #111827;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 1.2;
    color: #5a5c69;
    margin: 0 0 1.5rem;
    > span {
      display: flex;
      align-items: center;
      padding: 0 5px 0 0;
    }
    i {
      margin: 0 5px 0 0;
    }

    .btnCreateNew {
      padding: 0;
      border: 0;
      box-shadow: 0 0.125rem 0.25rem 0 rgb(58 59 69 / 20%);
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
      color: #ffffff;
      background-color: #4e73df;
      border-color: #4e73df;
      text-align: center;
      &:hover {
        background-color: #2e59d9;
        border-color: #2653d4;
      }
    }
  }

  // table
  .MuiTableCell-root {
    border: 1px solid rgba(224, 224, 224, 1);
  }

  // pagination
  .customPagination {
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    .MuiPagination-ul {
      li {
        &:first-child {
          button {
            border-top-left-radius: 0.35rem;
            border-bottom-left-radius: 0.35rem;
          }
        }
        &:last-child {
          button {
            border-top-right-radius: 0.35rem;
            border-bottom-right-radius: 0.35rem;
          }
        }
      }
      button {
        border-radius: 0;
        border: 1px solid #dddfeb;
        margin: 0;
        margin-left: -1px;
        color: #4e73df;
        background: #fff;
        min-width: 36px;
        height: 38px;
        font-size: 1rem;
        font-weight: 300;
        &:hover {
          background: #eaecf4;
        }
        &.Mui-selected {
          pointer-events: none;
          color: #fff;
          background: #4e73df;
        }
      }
    }
  }

  .MuiPaper-root.MuiPaper-rounded {
    box-shadow: none;
  }

  // form
  .searchListForm {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 10px;
    > span {
      font-weight: 300;
      padding: 0 10px 0 0;
    }
    .fieldWrapper {
      width: 189px;
      input {
        height: 31px;
        box-sizing: border-box;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        // border: 1px solid #d1d3e2;
        border-radius: 4px;
      }
    }
  }

  button {
    cursor: pointer;
  }

  .MuiFormControl-root {
    .MuiFormHelperText-root {
      margin-left: 0;
      color: #d32f2f!important;
    }
  }
  .editConnectWallet,
  .connectExchangeForm,
  .connectWalletForm,
  .loginForm {
    form, .editConnectWalletForm {
      .MuiFormControl-root {
        margin: 0 0 1rem;
        .MuiFormHelperText-root {
          margin: 5px 0 0;
        }
        .Mui-focused {
          input {
            background-color: #fff !important;
          }
          fieldset {
            border-color: #004b9e !important;
          }
        }
        .MuiOutlinedInput-root {
          border-radius:4px;
          fieldset {
            border: 2px solid #F0F3F5;
          }
          input {
            border-radius:4px;
            height: calc(1.5em + .75rem + 2px);
            padding: 1.6rem 1rem;
            box-sizing: border-box;
            font-size: .8rem;
            color: #6e707e;
            // background-color: #F0F3F5;
            background-color: #F1F5FA;
            &::-webkit-input-placeholder {
            color: #707070;

            }
          }
        }
        .Mui-error {
          fieldset {
            border-color: #d32f2f !important;
          }
        }
      }
    }
  }

  .dialogContent {
    padding: 0 60px 60px !important;
    @media screen and (max-width: 600px) {
    padding: 0 20px 20px !important;
    }
    .titleForm {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    .textForm {
      font-size: 14px;
      color: #707070;
      text-align: center;
    }      
    .textFormFirst {
      margin-top: 42px;
    }
    .labelInput {
      font-size: 16px;
      margin-top: 24px;
      margin-bottom: 8px;
    }
    .changePasswordBtn {
      margin-top: 32px;
    }
    .icon {
      display: flex;
      justify-content: center;
    }
    .labelDialog {
      font-size: 16px;
      text-align: center;
      margin-top: 12px;
      font-weight: 500;

    }
    .textBlue {
      color: #004B9E;
    }
    .textBold {
      font-weight: 900;
      margin-top: 32px;

    }
    .textBoldMargin {
      font-weight: 900;
      margin-top: 35px;
      margin-bottom: 19px
    }
    .labelSwitch {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }
    .description {
      font-size: 12px;
      color: #cdcdcd;
    }
    .directBtn {
      width: 100%;
      color: #000;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }
    .groupBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px; 
      column-gap: 40px;
      @media screen and (max-width: 600px) {
        column-gap: 10px;
      }
      .btnItem {
        width: 130px;
      }
    }

  }

  // customBootstrapDialog
  .confirmationDialog {
    .dialogContent {
      width: 300px;
      text-align: center;
      padding: 40px;
      .dialogTitle {
        margin: 0 0 30px;
        font-weight: normal;
      }
    }
  }

  .customBootstrapDialog.MuiDialog-root {
    &.logoutDialog {
      .MuiPaper-root {
        width: 100%;
        max-width: 450px;
      }
      .logoutTitle {
        color: #004B9E;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin-top: 32px;
      }
      .logoutButton {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
    }

    .MuiTypography-root {
      font-weight: 400;
      line-height: 1.5;
      color: #858796;
    }

    .MuiPaper-root {
      width: 100%;
      max-width: 800px;
    }

    .MuiDialogTitle-root {
      font-weight: 400;
      line-height: 1.5;
      color: #858796;
      .MuiButtonBase-root {
        top: 12px;
      }
    }

    .MuiDialogActions-root {
      padding: 1rem;
    }

    .btn {
      margin-left: 0.5rem;
      color: #fff;
      font-weight: 400;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.35rem;
    }

    .btnSubmit {
      background-color: #4e73df;
      border-color: #4e73df;
      &:hover {
        background-color: #2e59d9;
        border-color: #2653d4;
      }
    }

    .btnCancel {
      background-color: #858796;
      border-color: #858796;
      &:hover {
        background-color: #717384;
        border-color: #6b6d7d;
      }
    }
  }

  // header
  .wrapHeaderMenu {
    margin-top: 22px;
    .logoutBtn {
      margin: 16px 20px 20px;
    }
    .divider {
      height: 0;
      margin: 0.5rem 0;
      overflow: hidden;
      border-top: 1px solid #eaecf4;
    }
    li {
      // padding: 0 1.5rem 0 1rem;
      padding: 16px 20px;
      color: #3a3b45;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover {
        color: #2e2f37;
        background-color: #f8f9fc;
      }
      i {
        color: #d1d3e2;
        margin: 0.5rem;
      }
    }
  }
  .currencyHeader {
   font-size: 14px;
   font-weight: normal;
   column-gap: 32px;
   span {
    margin-left: 8px;
   }
  }

  // alert
  .alert {
    font-size: 1rem;
    color: green;
    &.emergency {
      color: red;
    }
    &.communication {
      color: orange;
    }
  }
  .MuiMenu-list {
    max-height: 405px
  }
  .MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper {box-shadow: 0px 12px 24px #00000029;}
  // .MuiPickersPopper-paper > div > div {
  //   &:first-child {
  //     display: none;
  //   }
  // }
  .Mui-selected {
    color: #004b9e !important;
    background-color: #fff !important;
    font-weight: 600 !important;
  }
  .typeText:hover {
    background-color: rgba(25, 118, 210, 0.08) !important;
  }
 .MuiAutocomplete-popper {
  box-shadow: 0px 12px 24px #00000029;
  border-radius: 2px;
 }
 .MuiDateRangePickerViewDesktop-root {
  box-shadow: 0px 12px 24px #0000000f !important;
}
.MuiAutocomplete-popupIndicatorOpen {
  transform: rotate(0) !important;
  svg > path {
     fill: #004b9e !important;
  }
 
}

.editTransactionContainer {
  z-index: 99999999 !important;
  .title {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  .dialogContent {
    // padding: 0 60px;
    @media screen and (max-width: 600px) {
      padding: 0 20px;
    }
  }
  .dialogContentContainer {
    // padding: 40px 0 40px;
    overflow-y: unset;
  }
  .label {
    margin-top: 20px;
    color:#707070;
    font-size: 14px;
  }
  .input {
    .MuiInputBase-root {
      background-color: #f1f5fa !important;
      border-radius: 4px;
      margin-top: 8px;
    }
    .currency {
      min-width: fit-content;
      font-size: 14px;
      color: #BEBEC3;
    }
    fieldset {
      border: none !important;
    }
    .Mui-focused {
      background-color: #fff;
      fieldset {
        border: 2px solid #004b9e !important;
      }
      .MuiInputBase-colorPrimary {
        background-color: unset !important;
        fieldset {
          border: none !important;
        }
      }
    }
    .Mui-error > fieldset {
      border: 2px solid #d32f2f !important;
    }
  }
  .selectInput {
    .Mui-focused {
      background-color: unset !important;
      fieldset {
        border: none !important;
      }
    }
  }
  .selectFeeType {
    .MuiInputBase-root {
      margin-top: 0 !important;
    }
  
  }
  .dialogAction {
    justify-content: center;
    padding: 34px;
    column-gap: 20px;
  }
  .typeTransactionContainer {
    column-gap: 10px;
    row-gap: 16px;
    // margin-top: 40px;
    flex-wrap: wrap;
    button {
      padding: 5px 0 !important;
    }
  }
  .coinsContainer {
    background-color: #eff4f9;
    border: 2px solid #f0f4f9;
    border-radius: 6px;
    height: fit-content;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    fieldset {
      border: none !important;
    }
    input {
      padding: 0;
    }
    .Mui-focused {
      background-color: #fff;
      fieldset {
        border: 2px solid #004b9e !important;
      }
    }
  }
}
.dialog {
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }
  .label {
    font-size: 14px;
    color: #707070;
    margin-top: 40px;
    text-align: center;
  }
  .labelInput {
    font-size: 12px;
    color: #707070;
    margin-top: 32px;
  }
  .text {
    font-size: 16px;
    margin-top: 20px;
  }
}
.blockListDialog {
  .item {
    margin: 8px 0;
    .itemInfo {
    column-gap: 8px;
    }
  }
}
.listExDialog {
  .MuiDialog-paper {
    max-height: 75%;
  }
  .title {
    font-size: 32px;
  }
  .searchInput{
    background-color: #004B9E0F;
    border-radius: 20px;
    fieldset {
      border: none;
    }
    .Mui-focused {
      background-color: #fff;
      fieldset {
        border: 2px solid #004b9e !important;
        border-radius: 20px;
      }
      svg > path {
        fill: #004b9e !important;
     }
    }
  }
  .groupBtn{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  .listEx {
    margin-top: 20px;
  }
  .exItem {
    width: 100%;
    box-shadow: 0px 12px 25px #0000000F;
    border-radius: 6px;
    padding: 20px;
    text-transform: none;
    .itemName {
      margin-left: 12px;
      font-size: 16px;
      color: #707070;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 600px) {
    .MuiDialog-paper {
      max-height: calc(100% - 26%);
    }
    .title {
      font-size: 14px;
    }
    .exItem {
      .itemName {
        font-size: 14px;
      }
    }
  }
  .titleContent {
    font-size: 24px;
    font-weight: bold;
    color:#343434;
    text-align: center;
    margin-top: 24px;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  .subContent {
    font-size: 16px;
    font-weight: normal;
    color:#343434;
    text-align: center;
    margin-top: 20px;
    @media screen and (max-width: 600px) {
      font-size: 12px;
      margin-top: 17px;
    }
  }
  
}
.portfolioLinkContainer {
  .walletList {
    width: 100%;
    .item {
      margin: 4px 0;
      
    }
  }
  .walletSelect {
    div {
      display: flex;
      align-items: center !important;
    }
  }
  .groupBtn {
    column-gap: 20px;
  }  
  .button {
    width: fit-content !important;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }
  .linkContainer {
    padding: 10px 16px;
    background-color: #F1F5FA;
    color: #707070;
    font-size: 16px;
    border-radius: 6px;
    margin-top: 40px;
    @media screen and (max-width: 600px) {
      .textLink {
        font-size: 14px;
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;
      }
    }
  }
  .removeLinkText {
    margin: 20px 0 40px;
    text-align: center;
    font-size: 14px;
    color: #707070;
    border: none;
    background-color: #fff;
  }
  .addLinkText {
    display: flex;
    align-items: center;
    justify-content: center !important;
    button {
      margin: -30px 0 20px;
      background-color: #fff;
      border: none;
      color: #004B9E; 
      font-size: 14px;
      img {
        margin-right: 8px;
      }
    }
    button:hover {
      opacity:0.85;
    }
  }
  .dialogTest{
    padding-bottom: 20px !important;
  }
  .connectionSelected {
    column-gap: 8px;
  }
  .title {
    @media screen and (max-width: 600px) {
      margin-top: 0;
    }
  }
  .connectionSelectedText {
    font-size: 12px;
    color: #707070;
    @media screen and (max-width: 600px) {
      margin-top: 20px;
    }
  }
  .itemContainer {
    margin: 10px 0;
  }
.copyIcon {
  @media screen and (max-width: 600px) {
    height: 20px;
    width: 18px;
  }
}
}
.MuiPickersPopper-root {
  z-index: 9999999999 !important;
  .MuiPickersPopper-paper {
    box-shadow: 0px 12px 24px #00000029;
  }
}
.MuiMenu-root {
  z-index: 9999999999 !important;

}
.flex {
  display: flex;
  align-items: center;
}
.flexCenter {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
}
.flexBetween {
  display: flex;
  justify-content: space-between !important;
  align-items: center;
}
.flexEnd {
  display: flex;
  justify-content: end !important;
  align-items: center;
}
.flexStart {
  display: flex;
  align-items: flex-start !important;
}
.textLeft {
  text-align: left !important;
}
.logoImage {
  border-radius: 50%;
}
#credential_picker_container {
  z-index: 999999999999999 !important;
}
.buttonNone {
  background-color: #fff;
  border: none;
  width: 100%;
}
::-webkit-scrollbar-track {
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar {
  height: 6px;
	width: 4px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: #ccc;
}
.greenText {
  color: #4baf15;
}
.redText {
  color: #d82c2c;
}
.greenContainer {
  background-color: #edf7e7;
  width: max-content;
  padding: 2px 4px 2px 2px;
  border-radius: 12px;
}
.redContainer {
  background-color: #fbe9e9;
  width: max-content;
  padding: 2px 4px 2px 2px;
  border-radius: 12px;
}
.tooltip {
  margin-left: 8px;
}
.MuiTooltip-popper {
  z-index: 999999999999 !important;
}
.editConnectWallet {
  .title {
    font-size: 16px;
    margin-top:0;
  }
  .editConnectWalletForm {
    padding: 0 60px 60px;
    @media screen and (max-width: 600px) {
      padding: 0 20px 20px;
    }
    .groupButton {
      margin-top: 40px;
      column-gap:16px;
      @media screen and (max-width: 600px) {
        margin-top: 20px;
      }
    }
    .loginLabel {
      margin-bottom: 8px;
    }
    .csvContainer {
      position: relative;
      margin-top: 24px;
      .csvInput {
        position: absolute;
        div > input {
          height: 243px;
          opacity: 0;
        }
      }
    }
    .uploadCsvBtn {
      width: 100%;
      background-color: #f1f5fa;
      border: none;
      padding: 60px;
      border-radius: 6px;
  
      .uploadCsvText {
        font-size: 14px;
        color: #707070;
        margin-top: 40px;
      }
    }
    .uploadCsvBtnError {
      background-color: #ffe8e8;
    }
    .errorTextCsv {
      margin-top: 6px;
    }
    .csvInfo {
      background-color: #f1f5fa;
      padding: 12px 20px;
      border-radius: 6px;
      margin-top: 40px;
      .csvName {
        column-gap: 6px;
        font-size: 16px;
        color: #707070;
      }
    }
  }
}
.MuiAutocomplete-popper {
  z-index: 999999999999 !important;
}
.textMenuImage {
  position: relative;
}
.inputFile {
  position: absolute;
  opacity: 0;
}
.processBar {
  background-color: #004B9E !important;
}
.deleteConfirmDialog {
  .titleConfirm {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 32px;
    color: #004B9E;
  } 
  .groupBtn {
    button {
      width: 140px !important;
    }
  } 
  .MuiDialog-container {
    align-items: flex-start;
    padding: 40px 0 0;
  }
}
.baseToast {
  z-index: 9999999999999999 !important;
}
.accSetting {
  .input {
    .Mui-error {
      border: 2px solid #d32f2f;
    }
    .MuiFormHelperText-root {
      background-color: #fff;
      margin-right: 0;
      padding-top: 4px;
      border: none;

    }
  }
}
.menuBtnItem {
  color: #343434 !important;
  font-size: 16px !important;
  font-weight: bold !important;
  padding: 0 !important;
  justify-content: start !important;
}
// body .dialog-open {
//   overflow: hidden !important;
// }
.gmoGroupHeader {
  z-index: 999 !important;
}
.connectBtnItem {
  padding: 0 !important;
}
.connectBtnItem > div{
  width: 100% !important;
  padding: 8px 16px !important;
}
.MuiLinearProgress-bar1Determinate {
  background-color: #004B9E !important;
}
.marginAuto {
  margin: auto;
}
.setupEmailContainer {  
  h2 {
    padding-bottom: 0;
  }
  .setupEmailTitle {
    font-size: 20px;
    margin-bottom: 26px;
    text-align: center;
    font-weight: bold;
  }
  .setupEmailForm {
    .setupDes {
      font-size: 14px;
      text-align: center;
    }
    .loginLabel {
      margin-top: 32px
    }
    .groupButton {
      margin-top: 20px;
      .button {
        font-size: 18px;
        font-weight: bold;
        @media screen and (max-width: 420px) {
          width: 100%;
          padding: 0 130px;
        }
        @media screen and (max-width: 320px) {
          width: 100%;
          padding: 0 80px;
        }
      }
      @media screen and (max-width: 600px) {
        margin-top: 20px;
      }
    }
    .resentSetupEmail {
      text-align: center;
      .titleLogin {
        font-size: 28px;
        font-weight: bold;
      }
      .emailText {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }  
}
.resentSetupEmail {
  text-align: center;
  .titleLogin {
    font-size: 28px;
    font-weight: bold;
  }
  .emailText {
    font-size: 20px;
    font-weight: bold;
  }
}
.inputNumber {
  & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button {
    display: none;
  }
  & input[type=number] {
    MozAppearance: textfield;
  }
}
.transferForm {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.filterHolding  {
  .MuiPopover-paper {
    right: 4% !important;
    left: unset !important;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12) !important;
    .dialogFilterContent {
      display: grid;
      width: 160px;
      max-height: 335px;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: 12px;
      line-height: 16px;
      .MuiFormControlLabel-root {
        margin-left: 10px;
        margin-right: 0;
        min-width: 150px;
      }
    }
  }
}
.portfolioSetting{
  .dialogContent {
      .description {
        color: #707070;
      }
    }
}
.blockListDialog{
    .coinsContainer{
      background: #F1F5FA;
      border-radius: 10px;
      height: 55px;
      button{
        padding-right: 10px;
      }
      fieldset{
        border: none;
      }
      input{
        padding: 0px 4px 0px 5px;
      }
    }
}
.item{
  .itemInfo{
    span{
      color: #BEBEC3;
    }
  }
}
`;

export default GlobalStyle;
