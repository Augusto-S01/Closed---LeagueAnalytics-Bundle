import React from "react";

import style from "./itemContainer.module.scss";
import IParticipantResumed from "model/IParticipantResumed";

interface Props{
	participante : IParticipantResumed;
}

function ItemContainer({participante}: Props){
	return(
		<div className={style.containerItens}>
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item0}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item1}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item2}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item3}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item4}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item5}.png`} className={style.item} />
			<img src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${participante.item6}.png`} className={style.item} />
		</div>
	);
}

export default ItemContainer;