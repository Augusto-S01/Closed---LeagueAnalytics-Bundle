import React, { useEffect } from "react";
import Header from "../../components/header";
import NavBar from "../../components/navBar";

import CardRanked from "../../components/cardRanked";

import style from "./inicio.module.scss";
import Partida from "../../components/partida";
import IHomepageInfo from "../../model/IHomepageInfo";

import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function inicio(){
	const [summonnerResume, setSummonnerResume] = useState<IHomepageInfo>();
	const { region, summonerName } = useParams();
	const navigate = useNavigate();

	useEffect(() =>{
		// if(!nickname) navigate ("/");
		// if(!region) navigate ("/");
		if (!summonerName || !region) return;
		getSummonerByNickname(summonerName).then((response) => {
			setSummonnerResume(response.data);
		}
		);
	},[]);


	return(
		<div>
			<Header/>
			<NavBar/>
			<main className={style.main}>
				<aside className={style.aside}>
					{summonnerResume?.leagueEntrys.map((leagueEntry,index) => (
						<CardRanked key={index} leagueEntry={leagueEntry} />
					))}
				</aside>
				<section className={style.section}>
					<ul className={style.list}>
						{summonnerResume?.listMatchsResumed.map((match,index) => (
							<Partida key={index} match={match}/>
						))}
					</ul>
				</section>
			</main>

		</div>
	);
}
import { getSummonerByNickname } from "service/leagueService";
import { useParams } from "react-router-dom";

export default inicio;