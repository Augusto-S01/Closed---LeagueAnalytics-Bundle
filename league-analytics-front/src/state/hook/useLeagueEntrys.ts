import { useRecoilValueLoadable} from "recoil";
import { LeagueEntrystateSelector, } from "state/seletores";



export const useLeagueEntry = () => {
	const matchList = useRecoilValueLoadable(LeagueEntrystateSelector);
	return matchList;
};

