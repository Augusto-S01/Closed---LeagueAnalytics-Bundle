import React from "react";

import style from "./containerRank.module.scss";
import ILeagueEntryResume from "model/ILeagueEntryResume";
import CardRanked from "./cardRanked";

interface Props {
	leagueEntrys: ILeagueEntryResume[];
}

function ContainerRank({ leagueEntrys }: Props) {
	// const leagueEntrySoloDuo = leagueEntrys.find(leagueEntry => leagueEntry.queueType === "RANKED_SOLO_5x5") as ILeagueEntryResume;
	// const leagueEntryFlex = leagueEntrys.find(leagueEntry => leagueEntry.queueType === "RANKED_FLEX_SR") as ILeagueEntryResume;
	
	return(
		<>
			{/* <CardRanked leagueEntry={leagueEntrySoloDuo} />
			<CardRanked leagueEntry={leagueEntryFlex} /> */}
		</>		
	);
}

export default ContainerRank;