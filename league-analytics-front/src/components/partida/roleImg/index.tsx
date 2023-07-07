import React from "react";

import style from "./roleImg.module.scss";


import top from "assets/position/icon-position-top.png";
import jungle from "assets/position/icon-position-jungle.png";
import solo from "assets/position/icon-position-middle.png";
import bot from "assets/position/icon-position-bottom.png";
import utility from "assets/position/icon-position-utility.png";

interface Props{
    role: string;
}



function RoleImg({role}: Props){
	function roleImage(role: string): string{
		const positions : Record<string,string>= {
			"TOP"    : top,
			"JUNGLE" : jungle,
			"MIDDLE" : solo,
			"BOTTOM" : bot,
			"UTILITY": utility
		};

		
		return positions[role];
	}

	return(
		<img className={style.laneIcon} src={roleImage(role)} alt="lane" />
	);


}

export default RoleImg;