
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Inicio from "./pages/inicio";
import Footer from "./components/footer";

export default function AppRouter(){
	return(
		<main className="container">
			<Router>
				<Routes>
					{/* faça a rota debaixo ter o valor absoluto  */}
					<Route path="/*" element={<Home/>}></Route>
					<Route path="/:region/:summonerName" element={<Inicio/>}></Route>
				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}