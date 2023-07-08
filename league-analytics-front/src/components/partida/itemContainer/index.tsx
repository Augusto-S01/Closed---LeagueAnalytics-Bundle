import React from "react";

import style from "./itemContainer.module.scss";
import IParticipantResumed from "model/IParticipantResumed";

interface Props{
	participante : IParticipantResumed;
}

function ItemContainer({participante}: Props){

	const itens = [participante.item0,participante.item1,participante.item2,participante.item3,participante.item4,participante.item5,participante.item6];


	return(
		<div className={style.containerItens}>
			{itens.map((item,index) => {
				if(item === 0) return <div key={index} className={style.item}></div>;
				return <img key={index} src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${item}.png`} className={style.item} />;
			})}
		</div>
	);
}

export default ItemContainer;