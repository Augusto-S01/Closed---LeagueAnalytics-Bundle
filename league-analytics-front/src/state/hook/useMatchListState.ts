import { useRecoilValueLoadable } from "recoil";
import { matchListStateSelector } from "state/seletores";



export const useMatchListState = () => {
	const matchList = useRecoilValueLoadable(matchListStateSelector);
	return matchList;
};

