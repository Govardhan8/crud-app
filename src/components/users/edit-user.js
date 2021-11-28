import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditUser = () => {
	const { id } = useParams()
	const history = useHistory()
	const [available, setAvailable] = useState(false)
	//To save user data when submitting the form
	const saveUser = (user) => {
		axios
			.put(`https://6166c4e213aa1d00170a670e.mockapi.io/users/${id}`, user)
			.then(() => history.push('/users'))
	}
	//Validations for the form
	const validations = Yup.object().shape({
		name: Yup.string().trim().required('Name is Required'),
		avatar: Yup.string()
			.trim()
			.min(15, 'Please enter atleast 20 characters for image url')
			.required('image url required'),
	})
	//Formik object for the form
	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				name: '',
				avatar: '',
			},
			validationSchema: validations,
			onSubmit: (values) => {
				saveUser(values)
			},
		})
	//To get user data when initially in the form
	const getUser = async () => {
		const userData = await axios.get(
			`https://6166c4e213aa1d00170a670e.mockapi.io/users/${id}/`
		)
		if (userData) {
			//Setting the form values when data is retrieved from api
			values.name = userData.data.name
			values.avatar = userData.data.avatar
			setAvailable(true)
		}
	}
	useEffect(() => {
		getUser()
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<main className=' main flex column align-center'>
				<h2>Edit User</h2>
				{/* Form is rendered only when form data is available until then we have a spinner gif */}
				{available ? (
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
							Save User
						</Button>
					</form>
				) : (
					<img
						src='https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif'
						alt='spinner'
					/>
				)}
			</main>
		</>
	)
}

export default EditUser
