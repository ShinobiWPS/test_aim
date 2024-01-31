
import router from '@/pages/routes'
import { RouterProvider } from 'react-router-dom'
import './App.css'


export default function App () {

	return (
		<>
			<RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
		</>
	)

}
