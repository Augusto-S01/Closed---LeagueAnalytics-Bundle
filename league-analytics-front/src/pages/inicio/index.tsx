import React, { useEffect } from "react";

import Header from "../../components/header";
import NavBar from "../../components/navBar";
import style from "./inicio.module.scss";

import expandMore from "assets/expand_more.svg";
import { getSummonerByNickname } from "service/leagueService";
import { useSummonerState } from "state/hook/useSummonerState";
import {  useMatchListState } from "state/hook/useMatchListState";
import { useRecoilValue, useSetRecoilState, waitForAll } from "recoil";
import { getMatchesByPuuid } from "service/matchService";
import { matchListState, summonerState } from "state/atom";

function Inicio() {
	const summonnerResume = useSummonerState();
	const matchsDisplayed = useMatchListState();

	function handleMoreMatchs() {
		// if (!summonnerResume || !summonnerResume.summoner.puuid || !region || !matchsDisplayed) return;
		// getMoreMatchs(summonnerResume.summoner.puuid, region, matchsDisplayed).then((response) => {
		// 	console.log(`matchsDisplayed: ${matchsDisplayed}`);
		// 	const newMatches = response.data;
		// 	setMatchsDisplayed(matchsDisplayed + newMatches.length);
		// 	setSummonnerResume((prevState) => {
		// 		if (prevState) {
		// 			return {
		// 				...prevState,
		// 				listMatchsResumed: [...prevState.listMatchsResumed, ...newMatches]
		// 			};
		// 		}
		// 		return prevState;
		// 	});
		// });
	}

	function teste() {
		// const puuid = "13xbi_h59i48E6mTGgfDjvxJmFF-E8DCUX2LI9pUTNF3i5-e7FbrieKF1lkZYjtVeLzwuas5kwMJbA";
		// const summonerId = "wrRJULZe9HE-8_4119i6PW7bg8ljXeaZ9ccCPXvS085BnA";
		// console.log(summonnerResume?.listMatchsResumed);
		// getSummonerByNickname("Thatcher").then((response) => {
		// 	console.log(response.data);
		// });
		// getSummonerByNickNameAndRegion("Thatcher");
		// getMatchesByPuuid(puuid,undefined,undefined,undefined,undefined,0,3).then((response) => {
		// 	console.log(response.data);
		// });
		// getLeagueEntrysByPuuid(summonerId);
		// getLeagueEntrysBySummonerIDFilter(summonerId);
		console.log(summonnerResume);
		console.log(matchsDisplayed);
	}

	return (
		<div>
			<Header />
			<NavBar />
			<main className={style.main}>
				<aside className={style.aside}>
					{/* <ContainerRank leagueEntrys={summonnerResume?.leagueEntrys as ILeagueEntry[]} /> */}
				</aside>
				<section className={style.section}>
					<ul className={style.list}>
						{/* {summonnerResume?.listMatchsResumed.map((match, index) => (
							<Partida key={index} match={match} />
						))} */}
					</ul>
					<img src={expandMore} alt="" className={style.expandMore} onClick={handleMoreMatchs} />
					<button onClick={teste}>teste</button>
				</section>
			</main>
		</div>
	);
}

export default Inicio;
