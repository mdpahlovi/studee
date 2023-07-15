import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['books'],
        }),
        getTenBook: builder.query({
            query: limit => `/books?limit=${limit}`,
            providesTags: ['books'],
        }),
        singleBook: builder.query({
            query: id => `/books/${id}`,
            providesTags: ['books'],
        }),
        postBook: builder.mutation({
            query: data => ({
                url: `/books`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['books'],
        }),
        updateBook: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['books'],
        }),
        deleteBook: builder.mutation({
            query: id => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books'],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetTenBookQuery,
    useSingleBookQuery,
    usePostBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
