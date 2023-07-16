import { IWishlist } from '@/types/index';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IWishlists {
    books: IWishlist[];
}

const initialWishList = localStorage.getItem('wishlist') !== null ? JSON.parse(localStorage.getItem('wishlist')!) : [];

const initialState: IWishlists = {
    books: initialWishList,
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<string>) => {
            const isExist = state?.books?.find(book => book?.book === action?.payload);
            if (isExist) {
                isExist.quantity = isExist.quantity! + 1;
            } else {
                state.books.push({ book: action?.payload, quantity: 1 });
            }
            localStorage.setItem('wishlist', JSON.stringify(state?.books));
        },
        removeOne: (state, action: PayloadAction<string>) => {
            const isExist = state.books.find(book => book?.book === action.payload);
            if (isExist && isExist.quantity! > 1) {
                isExist.quantity = isExist.quantity! - 1;
            } else {
                state.books = state.books.filter(book => book?.book !== action.payload);
            }
            localStorage.setItem('wishlist', JSON.stringify(state?.books));
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book?.book !== action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state?.books));
        },
    },
});

export const { addToWishlist, removeFromWishlist, removeOne } = wishlistSlice.actions;

export default wishlistSlice.reducer;
