import IParticipantResumed from "model/IParticipantResumed";
import React from "react";

import style from "./summonerSpellContainer.module.scss";
import spellListJson from "./summonerSpell.json";
interface Props {
	participante: IParticipantResumed;
}

function SummonerSpellContainer({ participante }: Props) {


	const spellList: Record<string, string> = spellListJson;
	const spell1 = participante.summoner1Id;
	const spell2 = participante.summoner2Id;
	const spell1Name = spellList[spell1];
	const spell2Name = spellList[spell2];

	return (
		<div className={style.containerSpell}>
			<img
				src={`https://opgg-static.akamaized.net/images/lol/spell/${spell1Name}.png?image=q_auto,w_22&v=1591083841`}
				alt="flash"
			/>
			<img
				src={`https://opgg-static.akamaized.net/images/lol/spell/${spell2Name}.png?image=q_auto,w_22&v=1591083841`}
				alt="flash"
			/>
		</div>
	);
}

export default SummonerSpellContainer;
