import React from "react";
import style from "./perkContainer.module.scss";

import runesJson from "./perk.json";
import IPerks from "model/IPearks";

interface Props {
	perks: IPerks;
}

function PerkContainer({ perks }: Props) {
	const baseUrl = "https://ddragon.leagueoflegends.com/cdn/img/";
	const getPrimaryRuneId = (perks: IPerks) => {
		const primaryStyle = perks.styles.find(
			(style) => style.description === "primaryStyle"
		);
		if (primaryStyle && primaryStyle.selections.length > 0) {
			const primaryPerk = primaryStyle.selections[0].perk;
			return primaryPerk;
		}
		return null;
	};

	const getSubStyleId = (perks: IPerks) => {
		const subStyle = perks.styles.find(
			(style) => style.description === "subStyle"
		);
		if (subStyle && subStyle.selections.length > 0) {
			const subPerk = subStyle.style;
			return subPerk;
		}
		return null;
	};

	const getRuneImage = (id: number | null) => {
		if (id) {
			const rune = runesJson.find((rune) => rune.id === id);
			if (rune) {
				return baseUrl + rune.icon;
			}
		}
		return "";
	};

	const primaryRuneId = getPrimaryRuneId(perks);
	const subStyleId = getSubStyleId(perks);

	return (
		<div className={style.perkContainer}>
			<img
				src={getRuneImage(primaryRuneId)}
				alt=""
				className={style.rune}
			/>
			<img
				src={getRuneImage(subStyleId)}
				alt=""
				className={style.rune}
			/>
		</div>
	);
}

export default PerkContainer;
