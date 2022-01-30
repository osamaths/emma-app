import axios from 'axios';
// import {Platform} from 'react-native';

export const BASE_URL =
  'http://' +
  // (Platform.OS === 'android' ? '10.0.2.2' : 'localhost') +
  'localhost' +
  ':5000/api/v1';

export const GET_REQUEST = async (endpoint = '', resolve, reject) => {
  const res = await axios.get(BASE_URL + endpoint);

  if (res.status === 200) {
    resolve && resolve(res?.data);
  } else {
    reject && reject(res);
  }

  return res;
};

export const POST_REQUEST = async (
  endpoint = '',
  body = {},
  resolve,
  reject,
) => {
  const res = await axios.post(BASE_URL + endpoint, body);

  if (res.status === 200) {
    resolve && resolve(res?.data);
  } else {
    reject && reject(res);
  }

  return res;
};
