import React from "react";
import Backgroud_video from "../backgroundVideo";

import IconHeader from "../iconHeader";

import style from "./header.module.scss";

function Header(){
	return(
		<header>
			<Backgroud_video coverType="header"></Backgroud_video>
			<section className={style.content}>
				<div className={style.head_container}>
					<IconHeader size="header"/>
					<h1 className={style.head_container__title}>League Analytics</h1>
				</div>
			</section>
		</header>
	);
}

export default Header;