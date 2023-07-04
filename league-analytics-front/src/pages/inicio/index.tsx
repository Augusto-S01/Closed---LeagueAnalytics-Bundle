import React from "react";
import Header from "../../components/header";
import NavBar from "../../components/navBar";

import CardRanked from "../../components/cardRanked";

import style from "./inicio.module.scss";
import Partida from "../../components/partida";

function inicio(){
	return(
		<div>
			<Header/>
			<NavBar/>

			<main className={style.main}>
				<aside className={style.aside}>
					<CardRanked tittle="Ranked Solo/Duo"/>
					<CardRanked tittle="Ranked Flex"/>
				</aside>
				<section className={style.section}>
					<ul className={style.list}>
						<Partida/>
						<Partida/>
						<Partida/>
						<Partida/>
					</ul>
				</section>
			</main>

		</div>
	);
}

export default inicio;