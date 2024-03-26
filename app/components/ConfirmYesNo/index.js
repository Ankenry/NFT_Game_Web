import React from 'react';
import { IconButton, Dialog, Box } from '@mui/material';
import BaseButton from 'components/BaseButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  button: {
    minWidth: '200px',
    backgroundColor: 'forestgreen !important',
    '&:hover': {
      border: '1px solid forestgreen',
    },
  },
}));

export function ConfirmYesNo(props) {
  const classes = useStyles();
  const { visible, onClose, onConfirm, content } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={visible}
      onClose={onClose}
      className="deleteConfirmYesNo"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          padding: '20px 20px 0 20px',
        }}
      >
        <IconButton onClick={onClose}>
          <CloseRoundedIcon sx={{ color: '#004B9E' }} />
        </IconButton>
      </Box>
      <div className=" dialogContent">
        <div className="titleConfirm">{content}</div>
        <div className="">
          <BaseButton
            type="primary"
            text="Yes"
            onClick={onConfirm}
            sx={{ minWidth: '200px', margin: '30px 0 10px' }}
          />
          <BaseButton
            type="primary"
            text="No"
            onClick={onClose}
            sx={{
              minWidth: '200px',
            }}
            className={classes.button}
          />
        </div>
      </div>
    </Dialog>
  );
}
ConfirmYesNo.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  content: PropTypes.string,
  textConfirmBtn: PropTypes.string,
};

export default ConfirmYesNo;
