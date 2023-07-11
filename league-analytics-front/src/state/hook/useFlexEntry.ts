import { useRecoilValueLoadable} from "recoil";
import { FlexEntrytateSelector} from "state/seletores";



export const useFlexEntry = () => {
	const matchList = useRecoilValueLoadable(FlexEntrytateSelector);
	return matchList;
};

