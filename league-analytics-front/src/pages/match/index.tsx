import React from "react";
import Header from "../../components/header";
import NavBar from "../../components/navBar";

import style from "./match.module.scss";

import  barao   from "../../assets/objetivosIcon/barao.png";
import  dragon  from "../../assets/objetivosIcon/dragon.png";
import  turret  from "../../assets/objetivosIcon/turret.png";
import  herald  from "../../assets/objetivosIcon/herald.png";
import  inib    from "../../assets/objetivosIcon/inibi.png";

import sorcery from "../../assets/Styles/7202_Sorcery.png";
import arcaneComet from "../../assets/Styles/Sorcery/ArcaneComet/ArcaneComet.png";
import manaflowBand from "../../assets/Styles/Sorcery/ManaflowBand/ManaflowBand.png";
import transcendence from "../../assets/Styles/Sorcery/Transcendence/Transcendence.png";
import scorch from "../../assets/Styles/Sorcery/Scorch/Scorch.png";


import whismsy from "../../assets/Styles/7203_Whimsy.png";
import magicalFootware from "../../assets/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png";
import biscuitDelivery from "../../assets/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png";
import cosmicInsight from "../../assets/Styles/Inspiration/CosmicInsight/CosmicInsight.png";

import adaptiveDamage from "../../assets/StatMods/StatModsAdaptiveForceIcon.png";
import armor from "../../assets/StatMods/StatModsArmorIcon.png";

import summonerRift from "../../assets/summonerRift.png";
import classNames from "classnames";



function match(){
	return(
		<main className={style.main}>
			<Header/>
			<NavBar/>

			<section className={style.stylecardMatch}>
				<div className={style.firstLine}>
					<h1 className={style.firstLine__queueType}>Ranqueada Solo Duo</h1>
					<div className={style.firstLine__timerContainer}>
						<span className={style.firstLine__text}>2023-06-10T21:39:42 UTC</span>
						<span className={style.firstLine__text}>10 / 06 / 2023</span>
					</div>
				</div>
				<div className={style.secondLine}>
					<div className={style.secondLine__info}>
						<div className={style.championContainer}>
							<img 
								src="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Aatrox.png" 
								alt="Aatrox" 
								className={style.championContainer__img}	
							/>
							<div className={style.championContainer__info}>
								<span className={classNames({
									[style.championContainer__info__championName]: true,
									[style.titulo_branco]: true
								})}  
								>Tucker Stirling</span>
								<div className={style.championContainer__info__championDetail}>
									<span className={
										classNames({
											[style.championContainer__info__championDetail__role]: true,
											[style.texto_cinza]: true
										})}>MID</span>
									<span className={
										classNames({
											[style.championContainer__info__championDetail__championLevel]:true,
											[style.texto_cinza]: true
										})}>Level 18</span>
								</div>
							</div>

						</div>
						<div className={style.kdaContainer}>
							<span className={
								classNames({
									[style.kdaContainer__kda]: true,
									[style.titulo_branco]: true
								})}>KDA</span>
							<span className={
								classNames({
									[style.kdaContainer__kda__score]:true,
									[style.texto_cinza]: true
								})}>1/2/3</span>
							<span className={
								classNames({
									[style.kdaContainer__kda__media]:true,
									[style.texto_cinza]:true
								})}>4.35</span>
						</div>
						<div className={style.csContainer}>
							<span className={
								classNames({
									[style.csContainer__cs]: true,
									[style.titulo_branco]: true
								})}>CS</span>
							<span className={
								classNames({
									[style.csContainer__cs__score]: true,
									[style.texto_cinza]: true
								})}>161</span>
							<span className={
								classNames({
									[style.csContainer__cs__media]: true,
									[style.texto_cinza]: true
								})}>~7.5/min</span>
						</div>
						<div className={style.wardContainer}>
							<span className={
								classNames({
									[style.wardContainer__wardTittle]:true,
									[style.titulo_branco]: true
								})}>Placar De Visão</span>
							<span className={
								classNames({
									[style.wardContainer__info]: true,
									[style.texto_cinza]: true
								})}>6 Wards</span>
							<span className={
								classNames({
									[style.wardContainer__info]: true,
									[style.texto_cinza]: true
								})}>2 Control</span>
							<span className={
								classNames({
									[style.wardContainer__info]: true,
									[style.texto_cinza]: true
								})}>1 Pink</span>
						</div>
						<div className={style.objetivosContainer}>
							<span className={style.objetivosContainer__objetivos}>Objetivos</span>
							<div className={style.objetivosContainer__objetivos__container}>
								<div className={style.objetivosContainer__objetivo}>
									<img src={barao} alt="" />
									<span className={style.texto_cinza}>1</span>
								</div>
								<div className={style.objetivosContainer__objetivo}>
									<img src={turret} alt="" />
									<span className={style.texto_cinza}>2</span>
								</div>
								<div className={style.objetivosContainer__objetivo}>
									<img src={inib} alt="" />
									<span className={style.texto_cinza}>3</span>
								</div>
								<div className={style.objetivosContainer__objetivo}>
									<img src={dragon} alt="" />
									<span className={style.texto_cinza}>4</span>
								</div>
								<div className={style.objetivosContainer__objetivo}>
									<img src={herald} alt="" />
									<span className={style.texto_cinza}>5</span>
								</div>
							</div>
						</div>
						<div className={style.runasContainer}>
							<span className={classNames({
								[style.runasContainer__tittle] : true,
								[style.titulo_branco]: true
							})}>Runas</span>
							<div className={style.runasContainer__containerPrimario}>
								<img src={sorcery} alt="Icone Arvore de runa" />
								<img src={arcaneComet} alt="" />
								<img src={manaflowBand} alt="" />
								<img src={transcendence} alt="" />
								<img src={scorch} alt="" />
							</div>
							<div className={style.runasContainer__containerSecundario}>
								<img src={whismsy} alt="Icone Arvore de runa" />
								<img src={magicalFootware} alt="" />
								<img src={biscuitDelivery} alt="" />
								<img src={cosmicInsight} alt="" />
							</div>
							<div className={style.runasContainer__Containerperks}>
								<img src={adaptiveDamage} alt="" />
								<img src={adaptiveDamage} alt="" />
								<img src={armor} alt="" />
							</div>
						</div>
					</div>
					<img src={summonerRift} alt=""  className={style.secondLine__map}/>
				</div>
				<div className={style.thirdLine}>
					<div className={style.redTeam}>

					</div>
					<div className={style.redTeam}>
						
					</div>
				</div>
			</section>
		</main>
	);
}

export default match;