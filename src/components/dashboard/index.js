import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import UserCard from './UserCard'

const Index = () => {
	const [users, setUsers] = useState([])
	const getUsers = async () => {
		const usersData = await axios.get(
			'https://6166c4e213aa1d00170a670e.mockapi.io/users'
		)
		setUsers(usersData.data)
	}
	useEffect(() => {
		getUsers()
	}, [])

	const deleteUser = async (id) => {
		await axios.delete(
			`https://6166c4e213aa1d00170a670e.mockapi.io/users/${id}`
		)
		getUsers()
	}
	return (
		<main className='cards-container flex column align-center'>
			<div className='main content grid align-center'>
				{users ? (
					users.map((user) => (
						<UserCard key={user.id} user={user} click={deleteUser} />
					))
				) : (
					<img
						src='https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif'
						alt='spinner'
					/>
				)}
			</div>
		</main>
	)
}

export default Index
