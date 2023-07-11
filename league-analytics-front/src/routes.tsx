
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/home";
import Inicio from "./pages/summonerResume";
import Footer from "./components/footer";
import Match from "./pages/match";
import SummonerResume from "./pages/summonerResume";

export default function AppRouter(){
	return(
		<main className="container">
			<BrowserRouter>
				<RecoilRoot>
					
					<Routes>
						{/* faça a rota debaixo ter o valor absoluto  */}
						<Route path="/*" element={<Home/>}></Route>
						<Route 
							path="/:region/:summonerName" 
							element={<SummonerResume />}>
						</Route>
						<Route path="/:region/:summonerName/:matchId" element={<Match/>}></Route>
					</Routes>
					<Footer/>
					
				</RecoilRoot>
			</BrowserRouter>
		</main>
	);
}