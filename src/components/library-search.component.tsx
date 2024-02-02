import { ReactNode } from 'react'

interface LibrarySearchProps {
	books: ReactNode;
}

export default function LibrarySearch ({ books }: LibrarySearchProps) {

	return <div className='search-container'>{books}</div>

}
