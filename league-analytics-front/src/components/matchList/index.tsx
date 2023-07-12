import React from "react";

import style from "./matchList.module.scss";
import { useRecoilValueLoadable } from "recoil";
import { matchListStateSelector } from "state/seletores";
import Partida from "components/partida";
import expandMore from "assets/expand_more.svg";
import { useMatchListState } from "state/hook/useMatchListState";

function matchList() {
	const matchsDisplayedLoadable = useMatchListState();

	if (matchsDisplayedLoadable.state === "loading") {
		return (
			<>
				<ul className={style.skeleton_list}>
				
				</ul>
				{/* <img src={expandMore} alt="" className={style.expandMore} /> */}
			</>
		);
	}
	if (
		matchsDisplayedLoadable.state === "hasError"
	) {
		throw matchsDisplayedLoadable.contents;
	}




	console.log(matchsDisplayedLoadable.contents);
	return (
		<>
			<ul className={style.list}>

				{matchsDisplayedLoadable.contents?.map((match, index) => (
					<Partida key={index} match={match} />
				))}
			</ul>
			{/* <img src={expandMore} alt="" className={style.expandMore} /> */}
		</>
	);
}

export default matchList;