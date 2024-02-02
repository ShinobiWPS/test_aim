
import router from '@/pages/routes'
import store from '@/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './App.css'


export default function App () {

	return (
		<>
			<Provider store={store}>
				<RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
			</Provider>
		</>
	)

}
