import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface BookData {
	docs: {
		key: string;
		title: string;
		author_name: string[];
		// ... other properties you expect to receive
	}[];
	// ... other properties you expect to receive
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	endpoints: (builder) => ({
		getBooks: builder.query<BookData, string>({
			query: (searchTerm) => `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&lang=ita&mode=ebooks&has_fulltext=true`
		})
	})
})

export const { useGetBooksQuery, useLazyGetBooksQuery } = apiSlice
