import React from "react";
import IParticipantResumed from "../../model/IParticipantResumed";

import style from "./teamResumedContainer.module.scss";

interface Props{
	team: IParticipantResumed[];
	color: "red" | "blue";
}

function TeamResumedContainer({team,color}: Props){

	const aatroxIcon = "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png";

	function searchImage(championName: string){
		return `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${championName}.png`;
	}
	return(
		<div className={style.container}>
			{team.map((player,index) => (
				<div key={index} className={style.containerPlayer}>
					<img src={searchImage(player.championName)} alt="champion" />
					<span className={style.summonerName}>{player.summonerName}</span>
				</div>
			))}
		</div>
	);
}


export default TeamResumedContainer;