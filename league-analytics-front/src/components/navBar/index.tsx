import React from "react";
import style from "./navBar.module.scss";
import {useNavigate} from "react-router-dom";
function NavBar(){
	const navigate = useNavigate();
	function handlerInicio(){
		navigate("/");
	}

	function handlerHistorico(){
		navigate("/aaa/aaaa");
	}

	return(
		


		<nav className={style.navBar}>
			<ul className={style.navBar__list}>
				<li className={`${style.navBar__list__item}`} onClick={handlerInicio}>
					<a className={style.navBar__list__item__link}>Inicio</a>
				</li>
				<li className={style.navBar__list__item}>
					<a className={`${style.navBar__list__item__link} ${style.funcionalidadeFutura}`}>Análise do Jogador</a>
				</li>
				<li className={style.navBar__list__item} onClick={handlerHistorico}>
					<a className={style.navBar__list__item__link}>Análise de historico</a>
				</li>
				
				<li className={style.navBar__list__item}>
					<a className={`${style.navBar__list__item__link} ${style.funcionalidadeFutura}`}>Ao vivo</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;