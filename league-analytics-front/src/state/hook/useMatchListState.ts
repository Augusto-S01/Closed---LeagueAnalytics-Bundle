import { useRecoilValue, useSetRecoilState} from "recoil";
import { matchListState } from "state/atom";
import { matchListStateSelector } from "state/seletores";



export const useMatchListState = () => {
	const matchList = useRecoilValue(matchListStateSelector);
	return matchList;
};

