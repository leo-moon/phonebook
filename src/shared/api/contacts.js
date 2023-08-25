import instance from "./auth";

// const contactsInstance = axios.create({
//   baseURL: 'https://6401b864ab6b7399d0aac6a5.mockapi.io/api/phonebook',
// });

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  console.log(data)
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  // const { data } = await instance.delete(`/contacts/${id}`);
  const { data } = await instance.delete(`/contacts/${id}`);

  return data;
};
