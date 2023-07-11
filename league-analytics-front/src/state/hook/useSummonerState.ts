import { useRecoilValue } from "recoil";
import { summonerStateSelector } from "state/seletores";




export const useSummonerState = () => {
	const summoner = useRecoilValue(summonerStateSelector);
	return summoner;
};
