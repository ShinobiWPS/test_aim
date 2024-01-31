import { ROUTES } from '@/pages/routes'
import { Link, Outlet } from 'react-router-dom'

export default function Layout () {


	return <>
		<Link to={ROUTES.COUNTER_PAGE} >Counter</Link>
		<Outlet />
	</>
	{ /* <><div id="sidebar"></div><div id="content">
		<button id="toggle">Hide / Show sidebar</button>
	</div><div id="sidebar"></div><div id="content">
		<button id="toggle">Hide / Show sidebar</button>
		<Outlet />
	</div></> */ }

}
