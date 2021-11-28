import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditProfile = () => {
	const { id } = useParams()
	const history = useHistory()
	const [available, setAvailable] = useState(false)
	//To save profile data after submitting the form
	const saveUser = (profile) => {
		axios
			.put(`https://6166c4e213aa1d00170a670e.mockapi.io/profile/${id}`, profile)
			.then(() => history.push('/profile/1'))
	}
	//Validations for the form
	const validations = Yup.object().shape({
		firstname: Yup.string().trim().required('firstname is Required'),
		lastname: Yup.string().trim().required('lastname is Required'),
		avatar: Yup.string()
			.trim()
			.min(15, 'Please enter atleast 15 characters for image url')
			.required('image url required'),
		city: Yup.string().trim().required('city is Required'),
		email: Yup.string()
			.trim()
			.email('Invalid email format')
			.required('Email is Required'),
	})
	//Formik object for the form
	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				firstname: '',
				lastname: '',
				avatar: '',
				city: '',
				email: '',
			},
			validationSchema: validations,
			onSubmit: (values) => {
				saveUser(values)
			},
		})
	//To get profile details initially
	const getProfile = async () => {
		const userData = await axios.get(
			`https://6166c4e213aa1d00170a670e.mockapi.io/profile/${id}/`
		)
		if (userData) {
			values.firstname = userData.data.firstname
			values.lastname = userData.data.lastname
			values.avatar = userData.data.avatar
			values.city = userData.data.city
			values.email = userData.data.email

			setAvailable(true)
		}
	}
	useEffect(() => {
		getProfile()
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<main className=' main flex column align-center'>
				<h2>Edit Profile</h2>
				{available ? (
					<form onSubmit={handleSubmit} className='form'>
						<TextField
							type='text'
							label='firstname'
							placeholder='firstname'
							id='firstname'
							name='firstname'
							variant='standard'
							sx={{
								width: '100%',
							}}
							value={values.firstname}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.firstname && touched.firstname}
							helperText={
								errors.firstname && touched.firstname && errors.firstname
							}
						/>
						<TextField
							type='text'
							label='lastname'
							placeholder='lastname'
							id='lastname'
							name='lastname'
							variant='standard'
							sx={{
								width: '100%',
							}}
							value={values.lastname}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.lastname && touched.lastname}
							helperText={
								errors.lastname && touched.lastname && errors.lastname
							}
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
						<TextField
							type='text'
							label='city'
							placeholder='city'
							id='city'
							name='city'
							variant='standard'
							sx={{
								width: '100%',
							}}
							value={values.city}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.city && touched.city}
							helperText={errors.city && touched.city && errors.city}
						/>
						<TextField
							type='text'
							label='email'
							placeholder='email'
							id='email'
							name='email'
							variant='standard'
							sx={{
								width: '100%',
							}}
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.email && touched.email}
							helperText={errors.email && touched.email && errors.email}
						/>
						<Button
							variant='contained'
							sx={{
								width: '100%',
								marginTop: '1rem',
							}}
							type='submit'
						>
							Update Profile
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

export default EditProfile
