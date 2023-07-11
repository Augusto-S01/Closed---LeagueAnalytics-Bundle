import React from "react";

import Header from "../../components/header";
import NavBar from "../../components/navBar";
import style from "./summonerResume.module.scss";
import MatchList from "components/matchList";
import ContainerRank from "components/containerRank";

function SummonerResume() {
	return (
		<div>
			<Header />
			<NavBar />
			<main className={style.main}>
				<aside className={style.aside}>
					<ContainerRank />
				</aside>
				<section className={style.section}>
					<MatchList/>
				</section>
			</main>
		</div>
	);
	
}

export default SummonerResume;
