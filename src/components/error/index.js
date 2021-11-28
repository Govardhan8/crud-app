import { Link } from 'react-router-dom'
import './index.css'

const index = () => {
	return (
		<div className='flex column justify-center align-center'>
			<h2>Sorry, we couldn't the page your looking for</h2>
			<Link to='/'>
				<h3>⬅Back to homepage</h3>
			</Link>
		</div>
	)
}

export default index
