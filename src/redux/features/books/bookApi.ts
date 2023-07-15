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
        updateBook: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
});

export const { useGetBooksQuery, useGetTenBookQuery, useSingleBookQuery, usePostBookMutation, useUpdateBookMutation } = bookApi;
