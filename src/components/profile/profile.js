import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import EmailIcon from '@mui/icons-material/Email'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button'

const Profile = () => {
	const { id } = useParams()
	const history = useHistory()
	const [profileData, setProfileData] = useState(null)
	//To get profile data from api
	const getProfile = async () => {
		const userData = await axios.get(
			`https://6166c4e213aa1d00170a670e.mockapi.io/profile/${id}/`
		)
		setProfileData(userData.data)
		console.log(userData.data)
	}
	useEffect(() => {
		getProfile()
		// eslint-disable-next-line
	}, [])

	return (
		<main className='main'>
			{profileData && (
				<div className='profile-container flex column'>
					<img
						className='profile-page-image'
						src={profileData.avatar}
						alt='profile'
					/>

					<p className='para flex '>
						<PermContactCalendarIcon />
						<span>
							{profileData.firstname} {profileData.lastname}
						</span>
					</p>
					<p className='para flex '>
						<EmailIcon />
						<span>{profileData.email}</span>
					</p>
					<p className='para flex '>
						<LocationCityIcon />
						<span> {profileData.city}</span>
					</p>
					<Button
						variant='contained'
						className='edit-button'
						onClick={() => {
							history.push('/edit-profile/1')
						}}
					>
						<EditIcon />
						<span>Edit profile</span>
					</Button>
				</div>
			)}
		</main>
	)
}

export default Profile
