// import { selector, useRecoilValue } from "recoil";
// import { homepageInfoState } from "../atom";
// import IHomepageInfo from "model/IHomepageInfo";
// import { getSummonerByNickname } from "service/leagueService";
// import { nicknameState } from "../atom";



// export const homePageinfoAsync = selector<IHomepageInfo>({
// 	key: "homePageinfoAsync",
// 	get: async ({ get }) => {

// 		const nickname = useRecoilValue(nicknameState);
// 		const response = await getSummonerByNickname(nickname);
// 		return response.data as IHomepageInfo;
// 	},
// });
