import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Trends from "./pages/Trends"
import Contact from "./pages/Contact"
import FreeNFTs from "./pages/FreeNFTs"
import PremiumNFTs from "./pages/PremiumNFTs"


const App = () => {
  return (
	<Router>
		<Navbar/>
		{/* <Home/>
		<Trends/>
		<FreeNFTs/> */}


		<Routes>
			<Route exact path='/' element={<Home/>}></Route>
			<Route exact path='/trends' element={<Trends/>}></Route>
			<Route exact path='/freenft' element={<FreeNFTs/>}></Route>
			<Route exact path='/premiumnft' element={<PremiumNFTs/>}></Route>
			<Route exact path='/contact' element={<Contact/>}></Route>
		</Routes>
	</Router>
  )
}

export default App