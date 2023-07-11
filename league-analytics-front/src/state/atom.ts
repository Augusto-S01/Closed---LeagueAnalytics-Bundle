import IMatchResumed from "model/IMatchResumed";
import ISummonerName from "model/ISummonerName";
import {atom} from "recoil";
import { getSummonerByQuery } from "service/summonerService";





export const summonerState = atom<ISummonerName>({
	key: "summonerState",
	default: {
		id: "",
		puuid: "",
		profileIconId: 0,
		summonerLevel: 0,
	}
});

export const matchListState = atom<IMatchResumed[]>({
	key: "matchList",
	default: [],
});