import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { useHistory } from 'react-router-dom'

const UserCard = ({ user, click }) => {
	const history = useHistory()
	return (
		<article className='user-card flex column justify-center align-center'>
			<img className='card-image' src={user.avatar} alt={user.name} />
			<div className='card-details'>
				<p className='user-name'>{user.name.toUpperCase()}</p>
			</div>
			<div className='card-buttons flex justify-between'>
				<IconButton
					onClick={() => {
						click(user.id)
					}}
				>
					<DeleteIcon
						sx={{
							color: 'red',
							fontSize: { md: '1.75rem' },
						}}
					/>
				</IconButton>
				<IconButton
					className='margin-auto-left'
					onClick={() => {
						history.push(`/edit-user/${user.id}`)
					}}
				>
					<EditIcon
						sx={{
							color: 'green',
							fontSize: { md: '1.75rem' },
						}}
					/>
				</IconButton>
			</div>
		</article>
	)
}

export default UserCard
