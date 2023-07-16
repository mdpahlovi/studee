import { api } from '@/redux/api/apiSlice';

const wishlistApi = api.injectEndpoints({
    endpoints: builder => ({
        postWishlist: builder.mutation({
            query: data => ({
                url: `/wishlist`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['wishlist'],
        }),
        getWishlists: builder.query({
            query: email => `/wishlist/${email}`,
            providesTags: ['wishlist'],
        }),
    }),
});

export const { usePostWishlistMutation, useGetWishlistsQuery } = wishlistApi;
