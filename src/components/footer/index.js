import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton } from '@mui/material'

const index = () => {
	return (
		<footer className='footer flex justify-center align-center'>
			<a href='https://github.com/Govardhan8/crud-app'>
				<IconButton>
					<GitHubIcon
						sx={{
							fontSize: { md: '2.25rem' },
						}}
					/>
				</IconButton>
			</a>
			<a href='https://www.linkedin.com/in/govardhan-n-22b856168'>
				<IconButton>
					<LinkedInIcon
						sx={{
							fontSize: { md: '2.25rem' },
						}}
					/>
				</IconButton>
			</a>
		</footer>
	)
}

export default index
