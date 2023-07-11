import React from "react";

import style from "./cardRanked.module.scss";

import iron from "assets/ranked-emblem/emblem-iron.png";
import bronze from "assets/ranked-emblem/emblem-bronze.png";
import silver from "assets/ranked-emblem/emblem-silver.png";
import gold from "assets/ranked-emblem/emblem-gold.png";
import platinum from "assets/ranked-emblem/emblem-platinum.png";
import diamond from "assets/ranked-emblem/emblem-diamond.png";
import master from "assets/ranked-emblem/emblem-master.png";
import grandmaster from "assets/ranked-emblem/emblem-grandmaster.png";
import challenger from "assets/ranked-emblem/emblem-challenger.png";




import classNames from "classnames";
import { queueRank, queueRender } from "../../../utils/queueRender";
import ILeagueEntry from "model/IleagueEntry";

interface Props{
	leagueEntry :  ILeagueEntry;
}


function CardRanked({ leagueEntry }: Props){
	
	const emblems  :  Record <string,string> = {
		"IRON" : iron,
		"BRONZE" : bronze,
		"SILVER" : silver,
		"GOLD" : gold,
		"PLATINUM" : platinum,
		"DIAMOND" : diamond,
		"MASTER" : master,
		"GRANDMASTER" : grandmaster,
		"CHALLENGER" : challenger,
	};
	//faça uma função  que baseado no leagueEntry.rank retorne o emblema correto

	function emblema(rank: string): string{
		return emblems[rank];
	}
	if(!leagueEntry) return null;

	return(
		<div className={classNames({
			[style.cardRanked]: true
		})}>
			<h1 className={style.rankTittle}>{queueRank(leagueEntry.queueType)}</h1>
			<div className={style.cardContainer}>
				
				<div className={style.rankedEmblem}>
					<img className={style.rankedEmblem__img} src={emblema(leagueEntry.tier)}  ></img>
				</div>
				
				<div className={style.rankedInfo}>
					<h2 className={style.rankedInfo__elo}>{`${leagueEntry.tier} ${leagueEntry.rank}`}</h2>
					<h3 className={style.rankedInfo__pdl}>{`${leagueEntry.leaguePoints} PDL`} </h3>
					<h4 className={style.rankedInfo__winRate}>{`${leagueEntry.wins}W ${leagueEntry.losses}L`}</h4>
				</div>
			</div>

		</div>
	);
}


export default CardRanked;