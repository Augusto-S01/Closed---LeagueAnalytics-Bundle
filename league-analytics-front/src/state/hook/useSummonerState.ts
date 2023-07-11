import {  useRecoilValueLoadable } from "recoil";
import { summonerStateSelector } from "state/seletores";




export const useSummonerState = () => {
	const summoner = useRecoilValueLoadable(summonerStateSelector);
	return summoner;
};
