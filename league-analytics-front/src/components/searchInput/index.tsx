import React, {useState} from "react";

import ArrowForward from "../../assets/arrow_forward.svg";
import style from "./searchInput.module.scss";
import {useNavigate} from "react-router-dom";

function SearchInput() {
	const navigate = useNavigate();
	const [region, setRegion] = useState("");
	const [summonerNickName, setSummonerNickName] = useState("");

	function enterSearch() {
		console.log(`${region}, ${summonerNickName}`);
		
		navigate(`/${region}/${summonerNickName}`);
	}

	function handleRegionChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setRegion(event.target.value);
	}

	function handleSummonerNickNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSummonerNickName(event.target.value);
	}

	return (
		<div className={style.searchInput}>
			<select
				name=""
				id=""
				className={style.searchInput__select}
				onChange={handleRegionChange}
			>
				<option
					value=""
					selected
					disabled
					className={style.searchInput__option}
				>
				Selecione uma região
				</option>
				<option value="BR" className={style.searchInput__option}>
					Brasil
				</option>
			</select>
			<input
				type="text"
				name=""
				id=""
				placeholder="Digite seu nick"
				maxLength={16}
				className={style.searchInput__inputText}
				onChange={handleSummonerNickNameChange}
			/>
			<button
				className={style.searchInput__buttonForward}
				onClick={enterSearch}
			>
				<img
					src={ArrowForward}
					alt="Arrow Forward"
					className={style.searchInput__arrowForward}
				/>
			</button>
		</div>
	);
}

export default SearchInput;
