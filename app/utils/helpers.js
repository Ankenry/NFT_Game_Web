import React, { useRef, useEffect } from 'react';
// import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import history from 'utils/history';
import { useLocation } from 'react-router-dom';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
export const handleLogout = router => {
  localStorage.clear();
  history.push(router);
};

export const openExternalLink = link => {
  if (link.includes('http')) {
    window.open(link, '_blank');
  } else {
    window.open(`https://${link}`, '_blank');
  }
};

export const useSearchQuery = () => queryString.parse(useLocation().search);

// export const usePrevious = value => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

export const isAuthenticated = () => localStorage.getItem('token');

// export const useOnClickOutside = (ref, handler) => {
//   useEffect(() => {
//     const listener = event => {
//       if (
//         !ref.current ||
//         ref.current.contains(event.target) ||
//         (event.target.closest('button') &&
//           event.target.closest('button').classList.contains('btnToggleMenu'))
//       ) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);
//     document.addEventListener('touchstart', listener);
//     return () => {
//       document.removeEventListener('mousedown', listener);
//       document.removeEventListener('touchstart', listener);
//     };
//   }, [ref, handler]);
// };

export const isIOS = () =>
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

export const logout = () => {
  localStorage.clear();
  history.push('/login');
};

// export const detechCurrentUserRole = conditionRoles => {
//   let result = false;
//   const userInfo = JSON.parse(localStorage.getItem('user_info'));
//   const { role = '' } = userInfo;
//   conditionRoles.map(conditionRole => {
//     if (role.toString() === conditionRole.toString()) {
//       result = true;
//     }
//   });
//   return result;
// };

// export const toLocaleString = number => {
//   if (number) {
//     const cloneNumber = +number;
//     return cloneNumber.toLocaleString();
//   }
//   return '';
// };

// export const stringGen = len => {
//   let text = '';

//   const charset =
//     'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < len; i++)
//     text += charset.charAt(Math.floor(Math.random() * charset.length));

//   return text;
// };

// export const uniqueAlerts = data => {
//   if (data.length > 0) {
//     return _.uniqBy(data, 'alert_type');
//   }
//   return [];
// };

// export const convertDateTime = (dateTime, format) => {
//   if (dateTime) {
//     return moment
//       .parseZone(dateTime)
//       .utc(true)
//       .format(format);
//   }
//   return '';
// };

export const formatNumberDemo = (number, decimal) => {
  const value = Number(number);
  return Number(value.toFixed(decimal)).toLocaleString();
};

export const formatNumber = (number, decimal) => {
  const value = Number(number);
  if (value >= 0 && value < 1000)
    return Number(value.toFixed(decimal)).toLocaleString();
  if (value >= 1000 && value < 1000000)
    return `${Number((value / 1000).toFixed(decimal)).toLocaleString()}`;
  if (value >= 1000000 && value < 1000000000)
    return `${Number((value / 1000000).toFixed(decimal)).toLocaleString()}`;
  if (value >= 1000000000 && value < 1000000000000)
    return `${Number((value / 1000000000).toFixed(decimal)).toLocaleString()}`;
  if (value >= 1000000000000)
    return `${Number(
      (value / 1000000000000).toFixed(decimal),
    ).toLocaleString()}`;
  return Number(value.toFixed(decimal)).toLocaleString();
};

export const formatDecimalNumber = (
  number,
  decimalBiggerZero,
  decimalLessZero,
  digits,
) => {
  const value = Number(number);
  // if (value <= 0) {
  //   return value;
  // }
  if (Math.abs(value) > 0 && Math.abs(value) < 1) {
    return `${value.toFixed(decimalLessZero)}`;
  }
  const numberStr = Number(number).toString();
  const [integerPart, decimalPart] = numberStr.split('.');
  if (integerPart.length > digits) {
    const truncatedInteger = `${Number(integerPart)
      .toLocaleString()
      .slice(0, digits)}...`;
    return truncatedInteger;
  }
  let result = integerPart;
  if (decimalPart !== undefined) {
    result += `.${decimalPart}`;
    return Number(Number(result).toFixed(decimalBiggerZero)).toLocaleString();
  }
  return Number(result).toLocaleString();
};

export const formatDateLineChart = (value, typeFormat) => {
  dayjs.extend(utc);
  switch (typeFormat) {
    case 'ONE_DAY':
      return dayjs.utc(value).format('H:ss');
    case 'ONE_WEEK':
      return dayjs.utc(value).format('MM/DD');
    case 'THREE_MONTHS':
      return dayjs.utc(value).format('MM/DD');
    case 'SIX_MONTHS':
      return dayjs.utc(value).format('MM/DD');
    case 'ONE_YEAR':
      return dayjs.utc(value).format('MMM-YYYY');
    case 'ALL':
      return dayjs.utc(value).format('MMM-YYYY');
    default:
      return dayjs.utc(value).format('MM/DD');
  }
};
export const getLabelXaxis = type => {
  switch (type) {
    case 'ONE_DAY':
      return 6;
    case 'ONE_WEEK':
      return 7;
    case 'ONE_MONTH':
      return 8;
    case 'THREE_MONTHS':
      return 9;
    case 'SIX_MONTHS':
      return 9;
    case 'ONE_YEAR':
      return 10;
    case 'ALL':
      return 10;
    default:
      return null;
  }
};
export const calculateCurrency = (number, rate) => {
  if (!number || !rate) {
    return 0;
  }
  const value = Number(number);
  return value * rate;
};
export const calculateCurrencyList = (number, time, dataExRate) => {
  const currentDatePart = time.split('T')[0];

  // Tìm object trong mảng dataExRate có createdDate trùng với phần YYYY-MM-DD
  const matchingRateObject = dataExRate.find(rateItem => {
    const rateDatePart = rateItem.createdDate.split('T')[0];
    return rateDatePart === currentDatePart;
  });

  // Nếu tìm thấy object có createdDate trùng, nhân giá trị với rate
  if (matchingRateObject) {
    const rate = matchingRateObject.rate;
    const value = Number(number);
    const newValue = value * rate;
    return newValue;
  }
  return number;
};
export const getConnectionName = connectionName => {
  if (!connectionName) {
    return;
  }
  if (connectionName.length > 18) {
    return `${connectionName.substring(0, 18)}...`;
  }
  return connectionName;
};

export const renderValueNumber = (
  value,
  color,
  decimal,
  decimalLessZero,
  digits,
) => {
  const [integerPart, decimalPart] = value.split('.');
  if (integerPart.replaceAll(',', '').length > digits) {
    const truncatedInteger = `${Number(integerPart.replaceAll(',', ''))
      .toLocaleString()
      .slice(0, digits)}...`;
    return truncatedInteger;
  }
  if (decimalPart) {
    if (decimalPart.length === decimal) {
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
          </span>
        </span>
      );
    }
    if (decimal > decimalPart.length) {
      const additionalZeroes = '0'.repeat(decimal - decimalPart.length);
      console.log(additionalZeroes);
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
            {additionalZeroes}
          </span>
        </span>
      );
    }
    const count = Math.max(decimalLessZero - decimalPart.length, 0);
    const additionalZeroes = '\u0030'.repeat(count);
    if (value && Number(value) === 0) {
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
            {additionalZeroes}...
          </span>
        </span>
      );
    }
    return (
      <span>
        {integerPart}.
        <span style={{ fontSize: '12px', color: color || '#707070' }}>
          {decimalPart}
          {additionalZeroes}
        </span>
      </span>
    );
  }
  return value;
};

//quantity portfolio
export const renderValueNumberQuantity = (
  value,
  color,
  decimal,
  decimalLessZero,
  digits,
) => {
  const [integerPart, decimalPart] = value.split('.');
  if (integerPart.replaceAll(',', '').length > digits) {
    const truncatedInteger = `${Number(integerPart.replaceAll(',', ''))
      .toLocaleString()
      .slice(0, digits)}...`;
    return truncatedInteger;
  }
  if (decimalPart) {
    if (decimalPart.length === decimal) {
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
          </span>
        </span>
      );
    }
    if (decimal > decimalPart.length) {
      const additionalZeroes = '0'.repeat(decimal - decimalPart.length);
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
            {additionalZeroes}
          </span>
        </span>
      );
    }
    const count = Math.max(decimalLessZero - decimalPart.length, 0);
    const additionalZeroes = '\u0030'.repeat(count);
    if (value && Number(value) === 0) {
      return (
        <span>
          {integerPart}.
          <span style={{ fontSize: '12px', color: color || '#707070' }}>
            {decimalPart}
            {additionalZeroes}...
          </span>
        </span>
      );
    }
    return (
      <span>
        {integerPart}.
        <span style={{ fontSize: '12px', color: color || '#707070' }}>
          {decimalPart.replace(/0+$/, '')}
          {additionalZeroes}
        </span>
      </span>
    );
  }
  return value;
};

export function convertNumberToString(number) {
  const stringNumber = number.toString();

  if (stringNumber.includes('e')) {
    let [base, exponent] = stringNumber.split('e');
    let result = '';

    if (Number(exponent) < 0) {
      result = '0.';
      while (Number(exponent) !== 0) {
        result += '0';
        exponent++;
      }
      result += base.replace('.', '');
    } else {
      const dotPosition = base.indexOf('.');
      if (dotPosition === -1) {
        result = base;
        while (Number(exponent) !== 0) {
          result += '0';
          exponent--;
        }
      } else {
        result =
          base.substring(0, dotPosition) + base.substring(dotPosition + 1);
        while (Number(exponent) > 0) {
          const remaining = result.substring(1);
          result = result[0] + (remaining !== '' ? remaining : '0');
          exponent--;
        }
        const dotIndex = Number(exponent) + dotPosition;
        if (dotIndex > 0) {
          result = `${result.slice(0, dotIndex + 1)}.${result.slice(
            dotIndex + 1,
          )}`;
        } else {
          result = `0.${'0'.repeat(Math.abs(dotIndex))}${result}`;
        }
      }
    }

    return result;
  }

  return stringNumber;
}

export const formatNumberValid = text => {
  let value = text.replace(/[^0-9.]/g, '');
  if (value.startsWith('.')) {
    value = value.slice(1);
  }
  const decimalCount = (value.match(/\./g) || []).length;
  if (decimalCount > 1) {
    value = value.slice(0, value.lastIndexOf('.'));
  }
  return value;
};
