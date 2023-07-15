import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
        }),
        getTenBook: builder.query({
            query: limit => `/books?limit=${limit}`,
        }),
        singleBook: builder.query({
            query: id => `/books/${id}`,
        }),
    }),
});

export const { useGetBooksQuery, useGetTenBookQuery, useSingleBookQuery } = bookApi;
