import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {
	const history = useHistory()
	const addUser = (user) => {
		axios
			.post(`https://6166c4e213aa1d00170a670e.mockapi.io/users/`, user)
			.then(() => history.push('/'))
	}

	const validations = Yup.object().shape({
		name: Yup.string().trim().required('Name is Required'),
		avatar: Yup.string()
			.trim()
			.min(15, 'Please enter atleast 20 characters image url')
			.required('image url required'),
	})

	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				name: '',
				avatar: '',
			},
			validationSchema: validations,
			onSubmit: (values) => {
				addUser(values)
			},
		})

	return (
		<main className=' main flex column align-center'>
			<h2>Add User</h2>
			<form onSubmit={handleSubmit} className='form'>
				<TextField
					type='text'
					label='name'
					placeholder='name'
					id='name'
					name='name'
					variant='standard'
					sx={{
						width: '100%',
					}}
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.name && touched.name}
					helperText={errors.name && touched.name && errors.name}
				/>
				<TextField
					type='text'
					label='avatar'
					placeholder='avatar'
					id='avatar'
					name='avatar'
					variant='standard'
					sx={{
						width: '100%',
					}}
					value={values.avatar}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.avatar && touched.avatar}
					helperText={errors.avatar && touched.avatar && errors.avatar}
				/>
				<Button
					variant='contained'
					sx={{
						width: '100%',
						marginTop: '1rem',
					}}
					type='submit'
				>
					Add User
				</Button>
			</form>
		</main>
	)
}

export default AddUser
