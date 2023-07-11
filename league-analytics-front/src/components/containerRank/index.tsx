import React from "react";

import style from "./containerRank.module.scss";
import CardRanked from "./cardRanked";
import { useRecoilValueLoadable } from "recoil";
import { FlexEntrytateSelector, LeagueEntrystateSelector, SoloDuoEntrytateSelector } from "state/seletores";


function ContainerRank() {
	const leagueEntrys = useRecoilValueLoadable(LeagueEntrystateSelector);
	const soloDuoEntrys = useRecoilValueLoadable(SoloDuoEntrytateSelector);
	const flex5x5Entrys = useRecoilValueLoadable(FlexEntrytateSelector);
	if (
		leagueEntrys.state === "loading"
	) {
		return <div>Loading...</div>;
	}

	if (
		leagueEntrys.state === "hasError"
	) {
		throw leagueEntrys.contents;
	}	
	return(
		<div className={style.containerRank}>
			<CardRanked leagueEntry={soloDuoEntrys.contents}/> 
			<CardRanked leagueEntry={flex5x5Entrys.contents}/> 
		</div>
	);
}

export default ContainerRank;