import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, currentFilter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter)
    )
);
