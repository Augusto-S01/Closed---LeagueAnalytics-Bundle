import React from "react";

import style from "./kdaContainer.module.scss";

interface Props {
    kill: number;
    death: number;
    assist: number;
}   

function KdaContainer({kill,death,assist}: Props) {
	return(
		<div className={style.div1}>
			<span className={style.kdaTittle}>K   / D   / A</span>
			<span className={style.kda}		 >{kill} / {death}   / {assist} </span>
		</div>
	);

}

export default KdaContainer;