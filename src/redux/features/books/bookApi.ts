import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query({
            query: query => `/books?query=${query}`,
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
            query: ({ id, ...payload }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: payload,
            }),
            invalidatesTags: ['books'],
        }),
        updateReview: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `/reviews/${id}`,
                method: 'PATCH',
                body: payload,
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
    useUpdateReviewMutation,
    useDeleteBookMutation,
} = bookApi;
