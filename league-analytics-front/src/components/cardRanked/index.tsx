import React from "react";

import style from "./cardRanked.module.scss";
import diamond from "../../assets/ranked-emblem/emblem-diamond.png";
import classNames from "classnames";

import ILeagueEntryResume from "../../model/ILeagueEntryResume";
import { queueRender } from "../../utils/queueRender";

interface Props{
	leagueEntry :  ILeagueEntryResume;
}


function CardRanked({ leagueEntry }: Props){
	
	return(
		<div className={classNames({
			[style.cardRanked]: true,
			[style.cardRanked__soloDuo]: leagueEntry.queueType === "RANKED_SOLO_5x5",
			[style.cardRanked__flex]:    leagueEntry.queueType === "RANKED_FLEX_SR",
		})}>
			<h1 className={style.rankTittle}>{queueRender(leagueEntry.queueType)}</h1>
			<div className={style.cardContainer}>
				
				{/* <div className={style.rankedEmblem}>
					<img className={style.rankedEmblem__img} src={diamond}  ></img>
				</div> */}
				
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