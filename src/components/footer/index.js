import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const index = () => {
	return (
		<footer className='footer'>
			<a href='#'>
				<GitHubIcon />
			</a>
			<a href='#'>
				<LinkedInIcon />
			</a>
		</footer>
	)
}

export default index
