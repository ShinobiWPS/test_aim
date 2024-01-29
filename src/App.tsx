
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/layout.component'
import CounterPage from './pages/counter.page'

const router = createBrowserRouter([
	{
		id: 'root',
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				path: 'counter',
				Component: CounterPage
			}
		]
	}
])


export default function App () {


	return (
		<>
			<RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
		</>
	)

}
