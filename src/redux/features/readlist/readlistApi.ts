import { api } from '@/redux/api/apiSlice';

const readlistApi = api.injectEndpoints({
    endpoints: builder => ({
        postReadlist: builder.mutation({
            query: data => ({
                url: `/readlist`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['readlist'],
        }),
        getReadlists: builder.query({
            query: email => `/readlist/${email}`,
            providesTags: ['readlist'],
        }),
        updateReadlist: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `/readlist/${id}`,
                method: 'PATCH',
                body: payload,
            }),
            invalidatesTags: ['readlist'],
        }),
    }),
});

export const { usePostReadlistMutation, useGetReadlistsQuery, useUpdateReadlistMutation } = readlistApi;
