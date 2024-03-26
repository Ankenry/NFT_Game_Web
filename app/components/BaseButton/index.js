import React from 'react';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import BaseButtonStyle from './BaseButtonStyle';
const BaseButton = props => {
  const { text, className, type, width, typeButton } = props;
  const renderClassName = () => {
    switch (type) {
      case 'primary':
        return 'btnBox';
      case 'secondary':
        return 'btnBox btnBoxBorder';
      case 'none':
        return 'btnBox btnBoxNone';
      default:
        break;
    }
  };
  return (
    <BaseButtonStyle>
      <div className={renderClassName()}>
        <Button
          variant="contained"
          size="large"
          type={typeButton || 'submit'}
          className={className}
          sx={{ width, boxShadow: 'none !important' }}
          {...props}
        >
          {text}
        </Button>
      </div>
    </BaseButtonStyle>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  typeButton: PropTypes.string,
};

export default BaseButton;
