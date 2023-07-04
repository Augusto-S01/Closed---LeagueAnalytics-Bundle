import React from "react";
import videoBg from "../../assets/backgroud_arcade.mp4";
import style from "./backgroundVideo.module.scss";
import classNames from "classnames";


interface Props{
	coverType: string;
}


function Backgroud_video({coverType}:Props){
	

	return(
		<video autoPlay loop muted playsInline className={classNames({
			[style.backgroud_video]:true,
			[style.fullCover] : coverType === "fullCover",
			[style.header] : coverType === "header"
		})}>
			<source src={videoBg} type="video/mp4"/>
		</video>	
	);
}

export default Backgroud_video;