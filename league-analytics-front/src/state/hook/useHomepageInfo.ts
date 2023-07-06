import { homepageInfoState } from "../atom";
import { useRecoilValue } from "recoil";

export const useHomepageInfo = () => {
	return useRecoilValue(homepageInfoState);
};
