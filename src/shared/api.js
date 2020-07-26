import axios from 'axios';
import qs from 'qs';

let token = '';

export const setToken = _token => (token = _token);

const api = axios.create();
api.defaults.baseURL = process.env.REACT_APP_END_POINT;
api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.post['Accept'] = 'application/json';
// {headers: new Headers({'Content-Type':'application/x-www-form-urlencoded'})}

api.interceptors.request.use(
  config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err.response),
);

const onError = response => ((response || {}).response || {}).data;
const onSuccess = response => response.data;

export const AuthService = {
  login: loginModel =>
    api.post(`/users/login`, loginModel).then(onSuccess, onError),

  register: registerModel =>
    api.post(`/v2/users`, registerModel).then(onSuccess, onError),

  getPinCode: ({ mobile, type }) =>
    api
      .post(
        `/users/pincode/get`,
        JSON.stringify({ mobile: mobile.replace('+', ''), type }),
      )
      .then(onSuccess, onError),

  forgotPassword: email =>
    api
      .post(`/users/forgotpassword`, JSON.stringify({ email }))
      .then(onSuccess, onError),

  resetPassword: (email, code, password) =>
    api
      .post(`/users/resetpassword`, JSON.stringify({ email, code, password }))
      .then(onSuccess, onError),

  changePassword: ({ userkey, password }) =>
    api
      .post(`/users/${userkey}/password/update`, JSON.stringify({ password }))
      .then(onSuccess, onError),
};

export const ProfileServices = {
  updateFavouriteTraidingPair: ({ tradingpair, favourite }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/favouritepair/update`,
      {
        body: `tradingpair=${tradingpair}&favourite=${favourite}`,
        method: 'post',
        headers,
      },
    );
  },

  getCurrentUser: ({ userkey }) => {
    return api.get(`/users/${userkey}`).then(onSuccess, onError);
  },

  updateUser: ({ userkey, firstname, lastname, email }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(`${process.env.REACT_APP_END_POINT}/users/${userkey}`, {
      body: `firstname=${firstname}&lastname=${lastname}&email=${email}`,
      method: 'post',
      headers,
    });
  },

  createAccount: ({ coinName }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(`${process.env.REACT_APP_END_POINT}/accounts/create`, {
      body: `coinName=${coinName}`,
      method: 'post',
      headers,
    });
  },

  updateEmail: ({ userkey, email }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(`${process.env.REACT_APP_END_POINT}/users/${userkey}`, {
      body: `email=${email}`,
      method: 'post',
      headers,
    });
  },

  updateBankInfo: ({
    userkey,
    swiftCode,
    accountName,
    accountNumber,
    bankAddress,
    bankName,
    countryCode,
    currencyCode,
  }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/bank/update`,
      {
        body: `swiftCode=${swiftCode}&accountName=${accountName}&accountNumber=${accountNumber}&bankAddress=${bankAddress}&bankName=${bankName}&countryCode=${countryCode}&currencyCode=${currencyCode}`,
        method: 'put',
        headers,
      },
    );
  },

  verifyBankInfo: ({ userkey, amount1, amount2, verifyCode }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/bank/verify`,
      {
        body: `amount1=${amount1}&amount2=${amount2}&verifyCode=${verifyCode}`,
        method: 'post',
        headers,
      },
    );
  },

  getBankInfo: ({ userKey }) =>
    api.get(`/users/${userKey}/bank`).then(onSuccess, onError),

  uploadId: ({ userkey, type, name, number, expiry, address, file }) => {
    let body = new FormData();
    body.append('file', file);
    body.append('name', name);
    body.append('type', type);
    body.append('number', number);
    body.append('expiry', expiry);
    body.append('address', address);

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/uploadid`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `Bearer ${token}`,
        },
        body,
        method: 'post',
      },
    );
  },

  verifyEDD: ({
    userkey,
    jobCategory,
    investmentPurpose,
    sourceOfFound,
    monthlyTradingAmount,
    monthlyTradingValue,
  }) => {
    let body = new FormData();
    body.append('JobCategory', jobCategory);
    body.append('InvestmentPurpose', investmentPurpose);
    body.append('type', 'edd');
    body.append('SourceOfFunds', sourceOfFound);
    body.append('EstimatedMonthlyTradingAmount', monthlyTradingAmount);
    body.append('EstimatedMonthlyTradingValue', monthlyTradingValue);

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/uploadid`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `Bearer ${token}`,
        },
        body,
        method: 'post',
      },
    );
  },

  updateProfilePicture: ({ userkey, file }) => {
    let body = new FormData();
    body.append('file', file);

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/avatar/update`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `Bearer ${token}`,
        },
        body,
        method: 'post',
      },
    );
  },

  getIds: ({ userkey }) => {
    return api.get(`/users/${userkey}/ids`).then(onSuccess, onError);
  },

  updatePhoneNumber: ({ userkey, code, phone }) => {
    // return api
    //   .post(`/users/${userkey}/phone/update`, JSON.stringify({ code, phone }))
    //   .then(onSuccess, onError);
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/phone/update`,
      {
        body: `code=${code.toString()}&phone=${phone.toString()}`,
        method: 'post',
        headers,
      },
    );
  },

  updateSecuritySettings: ({
    userkey,
    type,
    login_enabled,
    trade_enabled,
    withdraw_enabled,
    code,
  }) => {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return fetch(
      `${process.env.REACT_APP_END_POINT}/users/${userkey}/security`,
      {
        body: `type=${type}&login_enabled=${login_enabled}&trade_enabled=${trade_enabled}&withdraw_enabled=${withdraw_enabled}&code=${code}`,
        method: 'post',
        headers,
      },
    );
  },

  getSecuritySettings: ({ userkey }) => {
    return api.post(`/users/${userkey}/security`).then(onSuccess, onError);
  },
};

export const AccountServices = {
  getAccounts: userkey =>
    api
      .get(`/accounts/user/${userkey}?pagesize=2000&pageindex=0`)
      .then(onSuccess, onError),

  getAccountDetails: symbol =>
    api.get(`accounts/${symbol}/detail`).then(onSuccess, onError),
};

export const MarketServices = {
  getMarkets: currecny =>
    api.get(`/market/pairs?market=${currecny}`).then(onSuccess, onError),

  getMarketPrices: tradingpairs =>
    api
      .get(`/market/price?tradingpairs=${tradingpairs.join(',')}`)
      .then(onSuccess, onError),
};

export const TradeServices = {
  getOrdersByTraidingPair: symbol =>
    api.get(`/trades/list/${symbol}`).then(onSuccess, onError),
  listByUser: ({
    userkey,
    status,
    pagesize = 2000,
    pageindex = 1,
    from = '',
    to = '',
  }) =>
    api
      .get(
        `/trades/user/${userkey}?status=${status}&pagesize=${pagesize}&pageindex=${pageindex}&datefrom=${from}&dateto=${to}`,
      )
      .then(onSuccess, onError),
  create: ({
    userkey,
    currency,
    trade_currency,
    amount,
    price,
    market_price,
    code,
    type,
  }) => {
    const currencyType =
      currency !== 'BKN' &&
      currency !== 'SPNC' &&
      currency !== 'BTC' &&
      currency !== 'ETH'
        ? 'ERC20'
        : '';
    return api
      .post(
        `/trades`,
        JSON.stringify({
          userkey,
          type,
          currency,
          amount,
          price,
          market_price,
          trade_currency,
          code,
          currencyType,
        }),
      )
      .then(onSuccess, onError);
  },
  getTradeBook: tradingPair =>
    api
      .get(
        `/market/tradebook?tradingpair=${tradingPair}&cumulative=false&limit=15`,
      )
      .then(onSuccess, onError),

  getTradingView: (tradingPair, isDaily = false) => {
    const to = Number(new Date()) / 1000;
    const from = to - 3600;
    return api
      .get(
        `/tradingview/history?symbol=${tradingPair}&from=${from}&to=${to}&resolution=${
          isDaily ? 'D' : '1'
        }`,
      )
      .then(onSuccess, onError);
  },

  getHourlyDaily: ({ tradingPair, from, to, resolution }) => {
    return api
      .get(
        `/tradingview/history?symbol=${tradingPair}&from=${from}&to=${to}&resolution=${resolution}`,
      )
      .then(onSuccess, onError);
  },
};

export const TransactionServices = {
  withdrawal: obj =>
    api
      .post(`/coin/send`, qs.stringify(obj), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(onSuccess, onError),
};
