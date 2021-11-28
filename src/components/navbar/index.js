import './index.css'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Index = () => {
	const [image, setImage] = useState(null)
	//To get profile details
	const getProfile = async () => {
		const picurl = await axios.get(
			'https://6166c4e213aa1d00170a670e.mockapi.io/profile/1'
		)
		setImage(picurl.data.avatar)
	}
	useEffect(() => {
		getProfile()
	}, [])
	return (
		<nav className='navbar flex align-center'>
			<Link
				to='/'
				className='margin-auto-right flex justify-center align-center'
			>
				<IconButton>
					<HomeIcon
						sx={{
							fontSize: { md: '1.75rem' },
						}}
					/>
					<span>Home</span>
				</IconButton>
			</Link>
			<Link to='/users'>
				<IconButton>
					<GroupIcon
						sx={{
							fontSize: { md: '1.75rem' },
						}}
					/>
					<span>Users</span>
				</IconButton>
			</Link>
			<Link to='/create-user'>
				<IconButton>
					<AddIcon
						sx={{
							fontSize: { md: '1.75rem' },
						}}
					/>
					<span>Add user</span>
				</IconButton>
			</Link>
			{image && (
				<Link to='/profile/1'>
					<IconButton>
						<img className='profile-image' src={image} alt='profile pic' />
						<span className='profile-icon'>Robert Downey Jr</span>
					</IconButton>
				</Link>
			)}
		</nav>
	)
}

export default Index
