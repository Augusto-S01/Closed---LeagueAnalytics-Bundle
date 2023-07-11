import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getSummonerByNickNameAndRegion } from "service/summonerService";
import { summonerState } from "state/atom";
import { summonerStateSelector } from "state/seletores";




export const useSummonerState = () => {
	const summoner = useRecoilValue(summonerStateSelector);
	return summoner;
};
