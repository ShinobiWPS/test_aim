import reactLogo from '@/assets/react.svg'
import { useState } from 'react'

export default function CounterPage () {

	const [
		count,
		setCount
	] = useState(0)
	const increaseCounter = () => setCount((count) => count + 1)

	return <><div>
		<a href="https://react.dev" target="_blank">
			<img src={reactLogo} className="logo react" alt="React logo" />
		</a>
	</div><div className="card">
		<button onClick={increaseCounter}>
				count is {count}
		</button>
	</div></>

}
