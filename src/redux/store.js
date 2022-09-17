import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts-reducer';
import filter from './filter/filter-reducer';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts,
    filter,
  },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducer';
// // import contacts from './contacts/contacts-reducer';
// // import filter from './filter/filter-reducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// export default store;
