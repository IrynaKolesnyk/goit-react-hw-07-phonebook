import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.items;
export const getFilter = (state) => state.filter;
export const getAllContacts = (state) => state.items;
export const getLoading = (state) => state.loading;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// если возвращает массив или объект нужна мемоизация
