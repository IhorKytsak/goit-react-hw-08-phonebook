import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContactById: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContactById, setFilterValue } =
  phonebookSlice.actions;

const persistConfig = {
  key: 'phonebook-contacts',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const getFilter = state => state.phonebook.filter;
