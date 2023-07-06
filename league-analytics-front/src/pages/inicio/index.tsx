import React from "react";
import Header from "../../components/header";
import NavBar from "../../components/navBar";

import CardRanked from "../../components/cardRanked";

import style from "./inicio.module.scss";
import Partida from "../../components/partida";
import IHomepageInfo from "../../model/IHomepageInfo";
import { useRecoilState } from "recoil";
import { homepageInfoState } from "../../state/atom";




function inicio(){
	const data   = useRecoilState<IHomepageInfo>(homepageInfoState)[0];
	



	return(
		<div>
			<Header/>
			<NavBar/>
			<main className={style.main}>
				<aside className={style.aside}>
					{data.leagueEntrys.map((leagueEntry,index) => (
						<CardRanked key={index} leagueEntry={leagueEntry} />
					))}
				</aside>
				<section className={style.section}>
					<ul className={style.list}>
						{data.listMatchsResumed.map((match,index) => (
							<Partida key={index} match={match}/>
						))}
					</ul>
				</section>
			</main>

		</div>
	);
}

export default inicio;