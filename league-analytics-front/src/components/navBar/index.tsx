import React from "react";
import style from "./navBar.module.scss";

function NavBar(){
	return(
		<nav className={style.navBar}>
			<ul className={style.navBar__list}>
				<li className={style.navBar__list__item}>
					<a href="#" className={style.navBar__list__item__link}>Inicio</a>
				</li>
				<li className={style.navBar__list__item}>
					<a href="#" className={style.navBar__list__item__link}>Análise do Jogador</a>
				</li>
				<li className={style.navBar__list__item}>
					<a href="#" className={style.navBar__list__item__link}>Ao vivo</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;