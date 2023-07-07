import React, {useState} from "react";

import ArrowForward from "../../assets/arrow_forward.svg";
import style from "./searchInput.module.scss";
import {useNavigate} from "react-router-dom";
import errorList from "./errorList.json";
import classNames from "classnames";
import { getSummonerByNickname } from "../../service/leagueService";
import IHomepageInfo from "../../model/IHomepageInfo";
import { useSetRecoilState } from "recoil";
import { homepageInfoState } from "../../state/atom";

function SearchInput() {
	const navigate = useNavigate();
	const [region, setRegion] = useState("");
	const [summonerNickName, setSummonerNickName] = useState("");
	const [error, setError] = useState("");
	const setHomepageInfo = useSetRecoilState<IHomepageInfo>(homepageInfoState);


	function enterSearch() {
		if(region == "") {
			showError(errorList.regiaoNotSelected);
			return;
		}
		if(summonerNickName == "") {
			showError(errorList.summonerNotFound);
			return;
		}

		if (error == ""){
			getSummonerByNickname(summonerNickName)
				.then((response) => {
					const data: IHomepageInfo = response.data;
					setHomepageInfo(data);
					navigate(`/BR/${summonerNickName}`);
				});
				
		}


		
	}
	
	function handleRegionChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setRegion(event.target.value);
	}
	
	function handleSummonerNickNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSummonerNickName(event.target.value);
	}
	
	

	function showError(error: string) {
		setError(error);
		setTimeout(() => {
			setError("");
		}, 9000);
	}




	return (
		<div className={style.searchInputContainer}>
			<div className={style.searchInput}>
				<select
					name=""
					id=""
					className={style.searchInput__select}
					onChange={handleRegionChange}
				>
					<option
						value=""
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
			<div className={style.errorContainer}>
				<span className={classNames({
					[style.hide]: error === ""
				})}>{error}</span>
			</div>
		</div>
	);
}

export default SearchInput;
