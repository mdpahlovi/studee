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
        postBook: builder.mutation({
            query: data => ({
                url: `/books`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetBooksQuery, useGetTenBookQuery, useSingleBookQuery, usePostBookMutation } = bookApi;
