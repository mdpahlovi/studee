/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { IWishlist } from '@/types/index';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IWishlists {
    books: IWishlist[];
}

const initialState: IWishlists = {
    books: [],
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
        },
        removeOne: (state, action: PayloadAction<string>) => {
            const isExist = state.books.find(book => book?.book === action.payload);
            if (isExist && isExist.quantity! > 1) {
                isExist.quantity = isExist.quantity! - 1;
            } else {
                state.books = state.books.filter(book => book?.book !== action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book?.book !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist, removeOne } = wishlistSlice.actions;

export default wishlistSlice.reducer;
