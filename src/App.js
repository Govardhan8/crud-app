import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ListUsers from './components/listusers'
import { AddUser, EditUser } from './components/users'
import { EditProfile, Profile } from './components/profile'
import ErrorPage from './components/error'
import Dashboard from './components/dashboard'

function App() {
	return (
		<div className='app flex column'>
			<Router>
				<Navbar />
				{/* Routes to all the pages involved in the app */}
				<Switch>
					<Route exact path='/dashboard'>
						<Dashboard />
					</Route>
					<Route exact path='/'>
						<Redirect to='/dashboard' />
					</Route>
					<Route exact path='/users'>
						<ListUsers />
					</Route>
					<Route exact path='/create-user'>
						<AddUser />
					</Route>
					<Route exact path='/edit-user/:id'>
						<EditUser />
					</Route>
					<Route exact path='/edit-profile/:id'>
						<EditProfile />
					</Route>
					<Route exact path='/profile/:id'>
						<Profile />
					</Route>
					<Route exact path='**'>
						<ErrorPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
