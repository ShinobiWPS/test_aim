import { ROUTES } from '@/pages/routes'
import { Link, Outlet } from 'react-router-dom'

export default function Layout () {


	return <>
		<div style={{ display: 'flex',
			flexFlow: 'column' }}>
			<Link to={ROUTES.COUNTER_PAGE}>Counter</Link>
			<Link to={ROUTES.LIBRARY_SEARCH_PAGE}>Library search</Link>
		</div>
		<Outlet />
	</>
	{ /* <><div id="sidebar"></div><div id="content">
		<button id="toggle">Hide / Show sidebar</button>
	</div><div id="sidebar"></div><div id="content">
		<button id="toggle">Hide / Show sidebar</button>
		<Outlet />
	</div></> */ }

}
