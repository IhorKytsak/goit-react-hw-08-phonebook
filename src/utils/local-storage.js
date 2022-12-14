export const getlocalStorageData = () => {
  const contacts = localStorage.getItem('contacts');

  return JSON.parse(contacts);
};

export const setlocalStorageData = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
