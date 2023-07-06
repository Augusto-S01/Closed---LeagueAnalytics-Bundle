import React from "react";

import style from "./partida.module.scss";


import lane from "../../assets/position/icon-position-bottom.png";
import eletrocute from "../../assets/Styles/Domination/Electrocute/Electrocute.png";
import whimsy from "../../assets/Styles/7203_Whimsy.png";
import chevron_right from "../../assets/chevron_right.svg";
import IMatchResumed from "../../model/IMatchResumed";
import { queueRender } from "../../utils/queueRender";
import { useParams } from "react-router-dom";
import IParticipantResumed from "../../model/IParticipantResumed";

import spellListJson from "./summonerSpell.json";
import roleImageJson from "./roleImage.json";

import topIcon from "../../assets/position/icon-position-top.png";
import jungleIcon from "../../assets/position/icon-position-jungle.png";
import midIcon from "../../assets/position/icon-position-middle.png";
import botIcon from "../../assets/position/icon-position-bottom.png";
import supportIcon from "../../assets/position/icon-position-utility.png";
import TeamResumedContainer from "../teamResumedContainer";

interface Props{
	match : IMatchResumed;
}

function Partida({match}: Props){
	const { region , summonerName } = useParams();

	const boot  = "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/1001.png";
	

	const participantes = [...match.blueTeam,...match.redTeam];
	const participante  = participantes.find(participante => participante.summonerName === summonerName) as IParticipantResumed ;
	

	const spellList: Record<string, string> = spellListJson;
	const spell1 = participante.summoner1Id;
	const spell2 = participante.summoner2Id;
	let spell1Name = "";
	let spell2Name = "";

	const positions = {
		"TOP"     : "../../assets/position/icon-position-top.png",
		"JUNGLE"  : "../../assets/position/icon-position-jungle.png",
		"MIDDLE"  : "../../assets/position/icon-position-middle.png",
		"BOTTOM"  : "../../assets/position/icon-position-bottom.png",
		"SUPPORT" : "../../assets/position/icon-position-utility.png"
	};
	
	spell1Name = spellList[spell1];
	spell2Name = spellList[spell2];
	
	function roleImage(role: string){
		if(role === "TOP"){
			return topIcon;
		}
		if(role === "JUNGLE"){
			return jungleIcon;
		}
		if(role === "MIDDLE"){
			return midIcon;
		}
		if(role === "BOTTOM"){
			return botIcon;
		}
		if(role === "SUPPORT"){
			return supportIcon;
		}
	}
	

	return(
		<div className={style.partida} >
			<div className={style.border}></div>
			<div className={style.container}>
				<div className={style.container1}>
					<h1 className={style.queueType}>{queueRender(match.gameMode)}</h1>
					<div className={style.firstBlock}>
						<div className={style.containerSpell}>
							<img src={`https://opgg-static.akamaized.net/images/lol/spell/${spell1Name}.png?image=q_auto,w_22&v=1591083841`} alt="flash" />
							<img src={`https://opgg-static.akamaized.net/images/lol/spell/${spell2Name}.png?image=q_auto,w_22&v=1591083841`} alt="flash" />
						</div>
						<img 
							className={style.championIcon} 
							src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${participante?.championName}.png`} 
							alt="champion" 
						/>
						<img className={style.laneIcon} src={roleImage(participante.role)} alt="lane" />
					</div>
					{/* <h1 className={style.time}>Há dois dias</h1> */}
				</div>
				<div className={style.parent}>
					<div className={style.div1}>
						<span className={style.kdaTittle}>K   / D   / A</span>
						<span className={style.kda}		 >{participante?.kills} / {participante?.deaths}   / {participante?.assists} </span>
					</div>
					<div className={style.div2}>
						<span className={style.matchResultSpan}>{}</span>
						<div className={style.perkContainer}>
							<img src={eletrocute} alt="" className={style.rune}/>
							<img src={whimsy} alt="" className={style.rune}/>
						</div>
					</div>
					<div className={style.div3}>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item0}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item1}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item2}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item3}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item4}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item5}.png`}  className={style.item}/>
						<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item6}.png`}  className={style.item}/>
					</div>
				</div>
				<div className={style.containerPlayers}>
					<TeamResumedContainer team={match.blueTeam} color={"blue"} />
					<TeamResumedContainer team={match.redTeam}  color={"red" } />
				</div>
			</div>
			<div className={style.border}>
				<img src={chevron_right} alt="chevron_right" className={style.border__chevronRight} />
			</div>
		</div>
	);
}

export default Partida;