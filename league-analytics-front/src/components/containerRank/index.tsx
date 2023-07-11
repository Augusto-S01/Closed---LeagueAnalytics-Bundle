import React from "react";

import style from "./containerRank.module.scss";
import CardRanked from "./cardRanked";
import { useRecoilValueLoadable } from "recoil";
import { FlexEntrytateSelector, LeagueEntrystateSelector, SoloDuoEntrytateSelector } from "state/seletores";
import { useLeagueEntry } from "state/hook/useLeagueEntrys";
import { useSoloDuoEntry } from "state/hook/useSoloDuoEntry";
import { useFlexEntry } from "state/hook/useFlexEntry";


function ContainerRank() {
	const leagueEntrys = useLeagueEntry();
	const soloDuoEntrys = useSoloDuoEntry();
	const flex5x5Entrys = useFlexEntry();
	if (leagueEntrys.state === "loading") {
		return (
			<div className={style.skeleton_containerRank}>
			</div>);
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