import { useRecoilValueLoadable} from "recoil";
import { SoloDuoEntrytateSelector } from "state/seletores";



export const useSoloDuoEntry = () => {
	const matchList = useRecoilValueLoadable(SoloDuoEntrytateSelector);
	return matchList;
};

