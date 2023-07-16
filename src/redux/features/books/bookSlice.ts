import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
    genres: string[];
    publicationYears: string[];
}

const initialState: IBook = {
    genres: [],
    publicationYears: [],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            const isExist = state.genres.find(genre => genre === action.payload);

            if (isExist) {
                state.genres = state.genres.filter(genre => genre !== action.payload);
            } else {
                state.genres.push(action.payload);
            }
        },
        setPublicationYear: (state, action: PayloadAction<string>) => {
            const isExist = state.publicationYears.find(year => year === action.payload);

            if (isExist) {
                state.publicationYears = state.publicationYears.filter(year => year !== action.payload);
            } else {
                state.publicationYears.push(action.payload);
            }
        },
    },
});

export const { setGenre, setPublicationYear } = bookSlice.actions;

export default bookSlice.reducer;
