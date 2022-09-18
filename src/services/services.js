// import axios from 'axios';
import instance from './authApi';

// const instance = axios.create({
//   baseURL: `https://631c93a44fa7d3264cb1b965.mockapi.io/api/contacts`,
// });

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContacts = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};
