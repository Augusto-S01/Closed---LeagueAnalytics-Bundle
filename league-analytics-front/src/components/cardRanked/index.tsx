import React from "react";

import style from "./cardRanked.module.scss";
import diamond from "../../assets/ranked-emblem/emblem-diamond.png";
import classNames from "classnames";

interface Props{
	tittle: "Ranked Solo/Duo" | "Ranked Flex";
}


function CardRanked({ tittle }: Props){
	return(
		<div className={classNames({
			[style.cardRanked]: true,
			[style.cardRanked__soloDuo]: tittle === "Ranked Solo/Duo",
			[style.cardRanked__flex]: tittle === "Ranked Flex",
		})}>
			<h1 className={style.rankTittle}>{tittle}</h1>
			<div className={style.cardContainer}>
				
				<div className={style.rankedEmblem}>
					<img className={style.rankedEmblem__img} src={diamond}  ></img>
				</div>
				
				<div className={style.rankedInfo}>
					<h2 className={style.rankedInfo__elo}>Diamante IV</h2>
					<h3 className={style.rankedInfo__pdl}>75 PDL</h3>
					<h4 className={style.rankedInfo__winRate}>112V 110L</h4>
				</div>
			</div>

		</div>
	);
}


export default CardRanked;