import './App.css';

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route exact path="/" element={<Photos/>}/>
					<Route path="/cart" element={<Cart/>}/>
				</Routes>
        	</div>
		</Router>
        
    )
}

export default App;
