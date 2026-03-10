import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchProducts, fetchProductById } from "@/lib/data/products";
import { Product } from "@/hooks/useCartStore";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<
      { data: Product[]; nextCursor?: number },
      { pageParam?: number; category?: string }
    >({
      queryFn: async (arg) => {
        try {
          const result = await fetchProducts(arg);
          return { data: result };
        } catch (error: any) {
          return { error: error.message };
        }
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.category || "all"}`;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.pageParam === 1 || !arg.pageParam) {
          return newItems;
        }
        currentCache.data.push(...newItems.data);
        currentCache.nextCursor = newItems.nextCursor;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.pageParam !== previousArg?.pageParam;
      },
    }),
    getProductById: builder.query<Product | undefined, string>({
      queryFn: async (id) => {
        try {
          const result = await fetchProductById(id);
          return { data: result };
        } catch (error: any) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
