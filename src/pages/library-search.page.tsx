
import { useLazyGetBooksQuery } from '@/api/apiSlice'
import LibrarySearch from '@/components/library-search.component'
import { useState } from 'react'

export default function LibrarySearchPage () {

	const [
		searchTerm,
		setSearchTerm
	] = useState('')
	const [
		trigger,
		{ data: books, isLoading, error }
	] = useLazyGetBooksQuery()

	let content

	if (isLoading) {

		content = <div>Loading...</div>

	} else if (error) {

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		content = <div>{(error as any).message}</div>

	} else {

		content =
      <ul>{books?.docs.map((book) => <li key={book.key}>{book.title}</li>)}</ul>

	}
	const handleClickRequest = () => trigger(searchTerm)
	const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)

	return (
		<div>
			<input
				value={searchTerm}
				onChange={handleChangeSearchTerm}
				placeholder="Enter book name"
			/>
			<button onClick={handleClickRequest}>Search</button>
			<LibrarySearch books={content} />
		</div>
	)

}
