import React from "react";

import style from "./matchList.module.scss";
import { useRecoilValueLoadable } from "recoil";
import { matchListStateSelector } from "state/seletores";
import Partida from "components/partida";
import expandMore from "assets/expand_more.svg";

function matchList(){
	const matchsDisplayedLoadable = useRecoilValueLoadable(matchListStateSelector);

	if (
		matchsDisplayedLoadable.state === "loading"
	) {
		return <div>Loading...</div>;
	}

	if (
		matchsDisplayedLoadable.state === "hasError"
	) {
		throw matchsDisplayedLoadable.contents;
	}


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

	console.log(matchsDisplayedLoadable.contents);
	return (
		<>
			<ul className={style.list}>
				
				{matchsDisplayedLoadable.contents?.map((match, index) => (
					<Partida key={index} match={match} />
				))}
			</ul>
			<img src={expandMore} alt="" className={style.expandMore} onClick={handleMoreMatchs} />
		</>
	);
}

export default matchList;