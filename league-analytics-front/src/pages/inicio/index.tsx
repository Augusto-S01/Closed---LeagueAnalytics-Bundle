import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import CardRanked from "../../components/containerRank/cardRanked";
import style from "./inicio.module.scss";
import Partida from "../../components/partida";
import IHomepageInfo from "../../model/IHomepageInfo";
import expandMore from "assets/expand_more.svg";
import { getSummonerByNickname, getMoreMatchs } from "service/leagueService";
import ContainerRank from "components/containerRank";
import ILeagueEntry from "model/IleagueEntry";

function Inicio() {
	const [summonnerResume, setSummonnerResume] = useState<IHomepageInfo | null>(null);
	const { region, summonerName } = useParams();
	const [matchsDisplayed, setMatchsDisplayed] = useState<number>(3);

	useEffect(() => {
		if (!summonerName || !region) return;
		getSummonerByNickname(summonerName).then((response) => {
			const resume = response.data;
			setSummonnerResume(resume);
			if (!resume?.listMatchsResumed.length) return;
			setMatchsDisplayed(resume?.listMatchsResumed.length);
		});
	}, [summonerName, region]);

	function handleMoreMatchs() {
		if (!summonnerResume || !summonnerResume.summoner.puuid || !region || !matchsDisplayed) return;
		getMoreMatchs(summonnerResume.summoner.puuid, region, matchsDisplayed).then((response) => {
			console.log(`matchsDisplayed: ${matchsDisplayed}`);
			const newMatches = response.data;
			setMatchsDisplayed(matchsDisplayed + newMatches.length);
			setSummonnerResume((prevState) => {
				if (prevState) {
					return {
						...prevState,
						listMatchsResumed: [...prevState.listMatchsResumed, ...newMatches]
					};
				}
				return prevState;
			});
		});
	}

	function teste() {
		console.log(summonnerResume?.listMatchsResumed);
	}

	return (
		<div>
			<Header />
			<NavBar />
			<main className={style.main}>
				<aside className={style.aside}>
					<ContainerRank leagueEntrys={summonnerResume?.leagueEntrys as ILeagueEntry[]} />
				</aside>
				<section className={style.section}>
					<ul className={style.list}>
						{summonnerResume?.listMatchsResumed.map((match, index) => (
							<Partida key={index} match={match} />
						))}
					</ul>
					<img src={expandMore} alt="" className={style.expandMore} onClick={handleMoreMatchs} />
					<button onClick={teste}>teste</button>
				</section>
			</main>
		</div>
	);
}

export default Inicio;
