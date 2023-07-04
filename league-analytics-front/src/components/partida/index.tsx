import React from "react";

import style from "./partida.module.scss";


import lane from "../../assets/position/icon-position-bottom.png";
import eletrocute from "../../assets/Styles/Domination/Electrocute/Electrocute.png";
import whimsy from "../../assets/Styles/7203_Whimsy.png";

function Partida(){
	const boot  = "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/1001.png";
	const aatroxIcon = "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png";
	return(
		<div className={style.partida}>
			<div className={style.border}></div>
			<div className={style.container}>
				<div className={style.container1}>
					<h1 className={style.queueType}>Ranqueada Solo/Duo</h1>
					<div className={style.firstBlock}>
						<div className={style.containerSpell}>
							<img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,w_22&v=1591083841" alt="flash" />
							<img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,w_22&v=1591083841" alt="flash" />
						</div>
						<img className={style.championIcon} src={aatroxIcon} alt="champion" />
						<img className={style.laneIcon} src={lane} alt="lane" />
					</div>
					<h1 className={style.time}>Há dois dias</h1>
				</div>
				<div className={style.parent}>
					<div className={style.div1}>
						<span className={style.kdaTittle}>K   / D   / A</span>
						<span className={style.kda}		 >05 / 03   / 08 </span>
					</div>
					<div className={style.div2}>
						<span className={style.matchResultSpan}>Vítoria</span>
						<div className={style.perkContainer}>
							<img src={eletrocute} alt="" className={style.rune}/>
							<img src={whimsy} alt="" className={style.rune}/>
						</div>
					</div>
					<div className={style.div3}>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
						<img src={boot}  className={style.item}/>
					</div>
				</div>
				<div className={style.containerPlayers}>
					<div className={style.containerBlueTeam}>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
					</div>
					<div className={style.containerRedTeam}>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
						<div className={style.containerPlayer}>
							<img src={aatroxIcon} alt="champion" />
							<span className={style.summonerName}>Kauan</span>
						</div>
					</div>
				</div>
			</div>
			<div className={style.border}></div>
		</div>
	);
}

export default Partida;