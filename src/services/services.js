import axios from 'axios';

const instance = axios.create({
  baseURL: `https://631c93a44fa7d3264cb1b965.mockapi.io/api/contacts`,
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContacts = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
