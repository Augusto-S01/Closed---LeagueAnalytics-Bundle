import React from "react";
import style from "./footer.module.scss";

import logoRiot from "../../assets/riot-games-logo.png";
import logoAugusto from "../../assets/augusto-santos-logo.png";

function Footer(){
	return(
		<footer className={style.footer}>
			<h2 className={style.footer__h2}>Powered By:</h2>
			<div>
				<img className={style.logo} src={logoRiot} alt="Riot games Logo" /> 
			</div>
			<div className={style.logo__container}>
				<img className={style.logo} src={logoAugusto} alt="Augusto Santos Logo" />
				<p className={style.logo__p}>Augusto Santos</p>
			</div>

		</footer>
	);
}

export default Footer;