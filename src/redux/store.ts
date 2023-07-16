import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import userReducer from './features/users/userSlice';
import bookReducer from './features/books/bookSlice';
import wishlistReducer from './features/wishlist/wishlistSlice';

const store = configureStore({
    reducer: { wishlist: wishlistReducer, book: bookReducer, user: userReducer, [api.reducerPath]: api.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
