import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Book {
	cover_i: number;
	has_fulltext: boolean;
	edition_count: number;
	title: string;
	author_name: string[];
	first_publish_year: number;
	key: string;
	ia: string[];
	author_key: string[];
	public_scan_b: boolean;
}

export interface BooksState {
	books: Book[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: BooksState = {
	books: [],
	status: 'idle',
	error: null
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		fetchBooksStart: (state) => {

			state.status = 'loading'

		},
		fetchBooksSuccess: (state, action: PayloadAction<Book[]>) => {

			state.status = 'succeeded'
			state.books = action.payload

		},
		fetchBooksFailure: (state, action: PayloadAction<string>) => {

			state.status = 'failed'
			state.error = action.payload

		}
	}
})

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } = booksSlice.actions

export default booksSlice.reducer
