import Layout from '@/components/layout.component'
import CounterPage from '@/pages/counter.page'
import LibrarySearchPage from '@/pages/library-search.page'

import { createBrowserRouter } from 'react-router-dom'


export enum ROUTES {
	HOME_PAGE = '/',
	COUNTER_PAGE = 'counter',
	LIBRARY_SEARCH_PAGE = 'library-search'

}
const router = createBrowserRouter([
	{
		id: 'root',
		path: ROUTES.HOME_PAGE,
		Component: Layout,
		children: [
			{
				path: ROUTES.COUNTER_PAGE,
				Component: CounterPage
			},
			{
				path: ROUTES.LIBRARY_SEARCH_PAGE,
				Component: LibrarySearchPage
			}
		]
	}
])

export default router
