import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Dashboard from './components/dashboard'
import { AddUser, EditUser } from './components/users'

function App() {
	return (
		<div className='app flex column'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Dashboard />
					</Route>
					<Route exact path='/create-user'>
						<AddUser />
					</Route>
					<Route exact path='/edit-user/:id'>
						<EditUser />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
