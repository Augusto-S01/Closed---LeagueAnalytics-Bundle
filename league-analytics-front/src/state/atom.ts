import {atom} from "recoil";
import IHomepageInfo from "../model/IHomepageInfo";


export const homepageInfoState = atom<IHomepageInfo>({
	key: "homepageInfoState"
});

