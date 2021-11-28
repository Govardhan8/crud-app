import './index.css'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'

const index = () => {
	return (
		<nav className='navbar'>
			<Link>
				<HomeIcon />
			</Link>
			<Link>
				<AddIcon />
			</Link>
			<Link>
				<GroupIcon />
			</Link>
		</nav>
	)
}

export default index
