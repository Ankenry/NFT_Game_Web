import React, { useState, useEffect, useRef } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  Drawer,
  Menu,
  Box,
} from '@mui/material';
import searchIcon from 'images/customIcons/icon_search.svg';
import moreIcon from 'images/customIcons/icon_more.svg';
import ListExchangeDialog from 'components/ListExchangeDialog';
import { dataWallet } from 'containers/Portfolio/data';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserConnect,
  setExWalletSelect,
  removeConnection,
  getDemoConnect,
  setIsSearchConnection,
} from 'containers/App/actions';
import _debounce from 'lodash/debounce';
import { toast } from 'react-toastify';
import { getConnectionName } from 'utils/helpers';
import BaseButton from '../BaseButton';
import DrawerStyle from './DrawerStyle';
import EditConnectWalletDialog from '../EditConnectWalletDialog';
import EditApiConnectDialog from '../EditApiConnectDialog';
import EditCsvConnectDialog from '../EditCsvConnectDialog';
import {
  getHeatmap,
  getHoldings,
  getPieChart,
  getHoldingsDemo,
  getTransactions,
  getPieChartDemo,
  getHeatmapDemo,
  getTransactionsDemo,
} from '../../containers/Portfolio/actions';
import ConfirmDialog from '../ConfirmDialog';
import EditManualConnection from '../EditManualConnection';

const BaseDrawer = () => {
  const dispatch = useDispatch();
  const {
    listUserExWallet = [],
    userInfo = {},
    isSuccess = false,
    tabActivePortfolio = 0,
    exWalletSelected = 'ALL_ASSET',
    isEditSuccess = false,
    isDeleteSuccess = false,
  } = useSelector(state => state.global || {});
  const [isConnectEx, setIsConnectEx] = useState(false);
  const [visibleDeleteConnection, setVisibleDeleteConnection] = useState(false);
  const [height, setHeight] = useState();
  const [menu, setMenu] = React.useState(dataWallet[0].name);
  const [listExWallet, setListExWallet] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [dataConnectionName, setDataConnectionName] = useState({});
  const open = Boolean(anchorEl);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isSuccess || isEditSuccess || isDeleteSuccess) {
      if (
        localStorage.getItem('token') ||
        localStorage.getItem('token_connect')
      ) {
        dispatch(
          getUserConnect({
            userId: userInfo.id,
            anonymousId: localStorage.getItem('token_connect'),
          }),
        );
      } else {
        dispatch(getDemoConnect());
      }
    }
  }, [isDeleteSuccess, isSuccess, isEditSuccess]);
  useEffect(() => {
    if (listUserExWallet && listUserExWallet.length > 0) {
      setListExWallet(listUserExWallet);

      if (dataConnectionName && Object.keys(dataConnectionName).length !== 0) {
        const filteredWallet = listUserExWallet.find(
          item => item.walletAddress === dataConnectionName.walletAddress,
        );

        if (filteredWallet) {
          setDataConnectionName(filteredWallet);

          // Ensure the filtered object has the 'connectionName' property
          if (filteredWallet.connectionName) {
            setMenu(filteredWallet.connectionName);
          }
        }
      }
    }
    // Add additional logic if needed
  }, [listUserExWallet, dataConnectionName]);

  useEffect(() => {
    const elementBottomHeader = document.querySelector('.bottomHeader');
    const elementTopFooter = document.querySelector('.topFooter');
    if (elementBottomHeader && elementTopFooter) {
      const elementHeight =
        elementBottomHeader.clientHeight +
        elementTopFooter.clientHeight +
        36 + // margin
        29 + // GMOHeader
        177; // GMOFooter
      setHeight(window.innerHeight - elementHeight);
    }
  }, [window.innerHeight]);

  const handleOpen = (event, item) => {
    setDataEdit(item);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRemoveExWallet = () => {
    setVisibleDeleteConnection(false);
    if (
      !localStorage.getItem('token') &&
      !localStorage.getItem('token_connect')
    ) {
      toast.error('このデータは変更できません。.', {
        icon: false,
      });
      return;
    }
    dispatch(
      removeConnection({
        walletAddress:
          dataEdit.typeConnect === 'WALLET' ? dataEdit.walletAddress : null,
        userId: userInfo.id,
        exchangeId:
          dataEdit.typeConnect === 'WALLET' ? null : dataEdit.connectId,
        anonymousId: localStorage.getItem('token_connect'),
        chainId: null,
      }),
    );
  };
  const handleEditExWallet = () => {
    setOpenEditDialog(true);
    handleClose();
  };
  const onChooseAllAsset = () => {
    switch (tabActivePortfolio) {
      case 0:
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getHoldings({
              pageIndex: 1,
              // pageSize: 10,
              userId: userInfo.id,
              isCSV: false,
              anonymousId: localStorage.getItem('token_connect'),
            }),
          );
        } else {
          dispatch(
            getHoldingsDemo({
              pageIndex: 1,
              pageSize: 100,
            }),
          );
        }
        break;
      case 1:
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getHeatmap({
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              exchangeId: null,
              walletAddress: null,
              chainId: null,
              isCSV: false,
            }),
          );
          dispatch(
            getPieChart({
              exchangeId: null,
              walletAddress: null,
              chainId: null,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: false,
            }),
          );
        } else {
          dispatch(
            getPieChartDemo({
              exchangeId: null,
            }),
          );
          dispatch(
            getHeatmapDemo({
              exchangeId: null,
            }),
          );
        }

        break;
      case 2:
        // filter
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getTransactions({
              pageIndex: 1,
              // pageSize: 10,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: false,
            }),
          );
        } else {
          dispatch(
            getTransactionsDemo({
              pageIndex: 1,
              pageSize: 100,
            }),
          );
        }
        break;
      default:
        break;
    }
    dispatch(setExWalletSelect('ALL_ASSET'));
  };
  const handleExWallet = (event, el) => {
    event.preventDefault();
    setDataConnectionName(el);
    console.log(el);
    dispatch(setExWalletSelect(el));
    switch (tabActivePortfolio) {
      case 0:
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getHoldings({
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              exchangeId: el.typeConnect === 'WALLET' ? null : el.connectId,
              walletAddress:
                el.typeConnect === 'WALLET' ? el.walletAddress : null,
              chainId: null,
              pageIndex: 1,
              // pageSize: 10,
              isCSV: el.typeConnect === 'EXCHANGE_CSV',
            }),
          );
        } else {
          dispatch(
            getHoldingsDemo({
              pageIndex: 1,
              pageSize: 100,
              exchangeId: el.typeConnect === 'WALLET' ? null : el.exchangeId,
            }),
          );
        }

        break;
      case 1:
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getHeatmap({
              exchangeId: el.typeConnect === 'WALLET' ? null : el.connectId,
              walletAddress:
                el.typeConnect === 'WALLET' ? el.walletAddress : null,
              chainId: null,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: el.typeConnect === 'EXCHANGE_CSV',
            }),
          );
          dispatch(
            getPieChart({
              exchangeId: el.typeConnect === 'WALLET' ? null : el.connectId,
              walletAddress:
                el.typeConnect === 'WALLET' ? el.walletAddress : null,
              chainId: null,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: el.typeConnect === 'EXCHANGE_CSV',
            }),
          );
        } else {
          dispatch(
            getPieChartDemo({
              exchangeId: el.typeConnect === 'WALLET' ? null : el.exchangeId,
            }),
          );
          dispatch(
            getHeatmapDemo({
              exchangeId: el.typeConnect === 'WALLET' ? null : el.exchangeId,
            }),
          );
        }

        break;
      case 2:
        // filter
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getTransactions({
              pageIndex: 1,
              // pageSize: 10,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: el.typeConnect === 'EXCHANGE_CSV',
              exchangeId: el.typeConnect === 'WALLET' ? null : el.connectId,
              walletAddress:
                el.typeConnect === 'WALLET' ? el.walletAddress : null,
              chainId: null,
            }),
          );
        } else {
          dispatch(
            getTransactionsDemo({
              pageIndex: 1,
              pageSize: 100,
              exchangeId: el.typeConnect === 'WALLET' ? null : el.exchangeId,
            }),
          );
        }
        break;
      default:
        break;
    }
  };
  const handleNetwork = (event, el, item) => {
    event.preventDefault();
    dispatch(
      setExWalletSelect({
        ...el,
        walletAddress: item.walletAddress,
      }),
    );
    switch (tabActivePortfolio) {
      case 0:
        if (userInfo.id || localStorage.getItem('token_connect')) {
          dispatch(
            getHoldings({
              exchangeId: null,
              walletAddress: item.walletAddress,
              chainId: el.id,
              pageIndex: 1,
              // pageSize: 10,
              userId: userInfo.id,
              anonymousId: localStorage.getItem('token_connect'),
              isCSV: false,
            }),
          );
        }
        break;
      case 1:
        dispatch(
          getHeatmap({
            userId: userInfo.id,
            anonymousId: localStorage.getItem('token_connect'),
            exchangeId: null,
            walletAddress: item.walletAddress,
            chainId: el.id,
            isCSV: false,
          }),
        );
        dispatch(
          getPieChart({
            exchangeId: null,
            walletAddress: item.walletAddress,
            chainId: el.id,
            userId: userInfo.id,
            anonymousId: localStorage.getItem('token_connect'),
            isCSV: false,
          }),
        );
        break;
      case 2:
        // filter
        dispatch(
          getTransactions({
            pageIndex: 1,
            // pageSize: 10,
            userId: userInfo.id,
            anonymousId: localStorage.getItem('token_connect'),
            isCSV: false,
            exchangeId: null,
            walletAddress: item.walletAddress,
            chainId: el.id,
          }),
        );
        break;
      default:
        break;
    }
  };
  const handleChange = event => {
    setMenu(event.target.value);
  };
  const debouncedApiCall = _debounce(value => {
    if (userInfo.id || localStorage.getItem('token_connect')) {
      dispatch(
        getUserConnect({
          userId: userInfo.id,
          anonymousId: localStorage.getItem('token_connect'),
          searchTerm: value,
        }),
      );
      if (value) {
        dispatch(setIsSearchConnection(true));
      } else dispatch(setIsSearchConnection(false));
    } else {
      dispatch(getDemoConnect(value));
    }
  }, 500);
  const handleChangeInput = event => {
    const { value } = event.target;
    const trimmedValue = value.trimStart();
    event.target.value = trimmedValue;
    if (trimmedValue) {
      debouncedApiCall((event.target.value = trimmedValue));
      setIsFocused(true);
    } else {
      debouncedApiCall();
      setIsFocused(false);
    }
  };
  const handleBlurInput = event => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    event.target.value = trimmedValue;
    // debouncedApiCall(event.target.value);
  };
  const renderEditDialog = type => {
    switch (type) {
      case 'WALLET':
        return (
          <EditConnectWalletDialog
            visible={openEditDialog}
            onClose={() => {
              setOpenEditDialog(false);
            }}
            item={dataEdit}
          />
        );
      case 'EXCHANGE_CSV':
        return (
          <EditCsvConnectDialog
            visible={openEditDialog}
            onClose={() => {
              setOpenEditDialog(false);
            }}
            item={dataEdit}
          />
        );

      case 'EXCHANGE_API':
        return (
          <EditApiConnectDialog
            visible={openEditDialog}
            onClose={() => {
              setOpenEditDialog(false);
            }}
            item={dataEdit}
          />
        );
      case 'EXCHANGE_MANUAL':
        return (
          <EditManualConnection
            visible={openEditDialog}
            onClose={() => {
              setOpenEditDialog(false);
            }}
            item={dataEdit}
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <DrawerStyle>
        {/* <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            minHeight: `${height}px`,
            boxShadow: '0px 12px 24px #0000000f',
            borderRadius: '4px',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { sm: '24%', boxShadow: '0px 12px 24px #0000000f' },
              columnGap: '8px',
              height: listExWallet.length === 0 ? '503px' : '1365px',
              top: 'unset',
              borderRadius: '4px',
              width: '100%',
            },
          }}
        > */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { sm: '24%', boxShadow: '0px 12px 24px #0000000f' },
              columnGap: '8px',
              // height: `${height}px`,
              height: listExWallet.length === 0 ? '503px' : '1365px',
              top: 'unset',
              borderRadius: '4px',
              position: 'static',
              width: '100%',
            },
          }}
          open
        >
          <div className="demoItem" style={{ minHeight: `${height}px` }}>
            <BaseButton
              className="connectBtn"
              text="ウォレットと接続"
              type="primary"
              width="100%"
              onClick={() => {
                setIsConnectEx(true);
              }}
            />
            <TextField
              className={`searchInputDrawer ${isFocused ? 'focused' : ''}`}
              fullWidth
              hiddenLabel
              placeholder="検索"
              name="search"
              type="text"
              variant="outlined"
              margin="dense"
              autoComplete="off"
              // value={searchTerm}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img src={searchIcon} alt="search-icon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleChangeInput}
              onBlur={handleBlurInput}
            />
            <List>
              <ListItem
                disablePadding
                className={
                  exWalletSelected === 'ALL_ASSET'
                    ? 'itemList activeItem'
                    : 'itemList'
                }
              >
                <ListItemButton
                  className="itemButton"
                  onClick={() => onChooseAllAsset()}
                >
                  <ListItemIcon>
                    <img
                      src={dataWallet[0].icon}
                      alt={dataWallet[0].name}
                      width={32}
                      height={32}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={dataWallet[0].name}
                    className="itemText"
                  />
                </ListItemButton>
              </ListItem>
              {listExWallet !== null && listExWallet.length > 0 ? (
                listExWallet.map((item, index) => (
                  <div key={index}>
                    <ListItem
                      disablePadding
                      className={
                        exWalletSelected === item
                          ? 'itemList activeItem'
                          : 'itemList'
                      }
                    >
                      <div className="flexBetween itemWalletEx">
                        <ListItemButton
                          className="itemButton"
                          onClick={event => handleExWallet(event, item)}
                        >
                          <ListItemIcon>
                            <img
                              src={item.icon}
                              alt={item.name}
                              width={32}
                              height={32}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              item && getConnectionName(item.connectionName)
                            }
                            // primary={renderConnectionName(item)}
                            className="itemText"
                          />
                        </ListItemButton>
                        <IconButton onClick={event => handleOpen(event, item)}>
                          <img src={moreIcon} alt="more-icon" />
                        </IconButton>
                      </div>

                      <Menu
                        anchorEl={anchorEl}
                        open={open && dataEdit.name === item.name}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={handleEditExWallet}>編集</MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            setVisibleDeleteConnection(true);
                          }}
                        >
                          削除
                        </MenuItem>
                      </Menu>
                    </ListItem>
                    {item.networks !== null && item.networks.length > 0 ? (
                      <List>
                        {item.networks.map((el, indexEl) => (
                          <ListItem
                            className={
                              exWalletSelected.id === el.id &&
                              item.walletAddress ===
                                exWalletSelected.walletAddress
                                ? 'exItem activeItem'
                                : 'exItem'
                            }
                            key={indexEl}
                          >
                            <ListItemButton
                              className="itemButton"
                              onClick={event => handleNetwork(event, el, item)}
                            >
                              <ListItemIcon>
                                <img
                                  src={el.icon ? el.icon : ''}
                                  alt={el.name}
                                  width={25}
                                  height={25}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  el.name.length > 18
                                    ? `${el.name.substring(0, 18)}...`
                                    : el.name
                                }
                                className="subItem"
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <></>
                    )}
                  </div>
                ))
              ) : (
                <></>
              )}
            </List>
          </div>
        </Drawer>
        {/* </Box> */}

        <Box
          className="demoItem demoItemMobile"
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <div className="title">選択中のウォレット</div>
          <FormControl fullWidth className="dropdown">
            <Select value={menu} onChange={handleChange}>
              <MenuItem
                value={dataWallet[0].connectionName}
                onClick={() => onChooseAllAsset()}
              >
                <ListItemButton className="itemButton">
                  <ListItemIcon>
                    <img
                      src={dataWallet[0].icon}
                      alt={dataWallet[0].name}
                      width={32}
                      height={32}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={dataWallet[0].connectionName}
                    className="itemText"
                  />
                </ListItemButton>
              </MenuItem>
              {listExWallet !== null && listExWallet.length > 0 ? (
                listExWallet.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item.connectionName}
                    onClick={event => handleExWallet(event, item)}
                  >
                    <ListItemButton className="itemButton">
                      <ListItemIcon>
                        <img
                          src={item.icon}
                          alt={item.name}
                          width={25}
                          height={25}
                        />
                      </ListItemIcon>
                      <ListItemText
                        // primary={renderConnectionName(item)}
                        primary={item && getConnectionName(item.connectionName)}
                        className="subItem"
                      />
                    </ListItemButton>
                  </MenuItem>
                ))
              ) : (
                <MenuItem />
              )}
            </Select>
            {dataWallet[0].name !== menu && (
              <IconButton
                onClick={event => handleOpen(event, exWalletSelected)}
              >
                <img src={moreIcon} alt="more-icon" />
              </IconButton>
            )}
          </FormControl>
        </Box>
      </DrawerStyle>
      <ListExchangeDialog
        visible={isConnectEx}
        onClose={() => setIsConnectEx(false)}
        typeList=""
      />
      {renderEditDialog(dataEdit.typeConnect)}
      <ConfirmDialog
        visible={visibleDeleteConnection}
        onClose={() => setVisibleDeleteConnection(false)}
        onConfirm={handleRemoveExWallet}
        content="すべてのポートフォリオ データが削除されます。続行してもよろしいですか?"
        textConfirmBtn="削除"
      />
    </>
  );
};

BaseDrawer.propTypes = {};

export default BaseDrawer;
