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
				<p className='user-name'>{user.name}</p>
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
						}}
					/>
				</IconButton>
			</div>
		</article>
	)
}

export default UserCard
