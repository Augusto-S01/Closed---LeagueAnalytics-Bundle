import React from "react";

import style from "./partida.module.scss";




import chevron_right from "../../assets/chevron_right.svg";
import IMatchResumed from "../../model/IMatchResumed";
import { queueRender } from "../../utils/queueRender";
import { useParams } from "react-router-dom";
import IParticipantResumed from "../../model/IParticipantResumed";





import TeamResumedContainer from "../teamResumedContainer";
import SummonerSpellContainer from "./summonerSpellContainer";
import RoleImg from "./roleImg";
import KdaContainer from "./kdaContainer";
import PerkContainer from "./perkContainer";
import ItemContainer from "./itemContainer";
import classNames from "classnames";

interface Props{
	match : IMatchResumed;
}

function Partida({match}: Props){
	const { region , summonerName } = useParams();
	

	const participantes = [...match.blueTeam,...match.redTeam];
	const participante  = participantes.find(participante => participante.summonerName.toUpperCase() == summonerName?.toUpperCase()) as IParticipantResumed ;
	

	if(!participante) return null;
	return(
		<div className={classNames({
			[style.partida]: true,
			[style.partida__lose]: participante?.win === false,
			[style.partida__win]: participante?.win === true,
		})} >
			<div className={classNames({
				[style.border]: true,
				[style.border__lose]: participante?.win === false,
				[style.border__win]: participante?.win === true,
			})}></div>
			<div className={classNames({
				[style.container]: true,
				[style.container__lose]: participante?.win === false,
				[style.container__win]: participante?.win === true,
			})}>
				<div className={style.container1}>
					<h1 className={style.queueType}>{queueRender(match.queueId)}</h1>
					<div className={style.firstBlock}>
						<SummonerSpellContainer participante={participante}/>
						<img 
							className={style.championIcon} 
							src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${participante?.championName}.png`} 
							alt="champion" 
						/>
						<RoleImg role={participante?.individualPosition} />
					</div>
				</div>
				<div className={style.containerKillRunasItens}>
					<div className={style.containerKDAMatchResultRunes}>
						<KdaContainer kill={participante.kills} death={participante.deaths} assist={participante.assists}/>
						<div className={style.containerMatchResultRunes}>
							<span className={style.matchResultSpan}>Vitoria</span>
							<PerkContainer perks={participante.perks}/>
						</div>
					</div>
					<ItemContainer participante={participante}/>
				</div>
				<div className={style.containerPlayers}>
					<TeamResumedContainer team={match.blueTeam} color={"blue"} />
					<TeamResumedContainer team={match.redTeam}  color={"red" } />
				</div>
			</div>
			<div className={classNames({
				[style.border]: true,
				[style.border__lose]: participante?.win === false,
				[style.border__win]: participante?.win === true,
			})}>
				<img src={chevron_right} alt="chevron_right" className={style.border__chevronRight} />
			</div>
		</div>
	);
}

export default Partida;