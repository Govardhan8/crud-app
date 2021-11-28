import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/dashboard'>dashboard</Route>
					<Route path='/users'>users</Route>
					<Route path='/'>home</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
