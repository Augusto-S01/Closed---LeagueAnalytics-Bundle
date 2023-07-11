import { useParams } from "react-router-dom";
import { selector, waitForAll } from "recoil";
import { getMatchesByPuuid } from "service/matchService";
import { getSummonerByNickNameAndRegion, getSummonerByQuery } from "service/summonerService";

// export const mySelector = selector({
// 	key: "mySelector",
// 	get: async ({ get }) => {
// 		return await getSummonerByQuery();
// 	},
// });

export const summonerStateSelector = selector({
	key: "summonerStateSelector",
	get: async ({ get }) => {
		const {summonerName} = useParams();
		if(summonerName == undefined) return;
		const summoner = await getSummonerByNickNameAndRegion(summonerName);
		return summoner.data;
	}
});

export const matchListStateSelector = selector({
	key: "matchListStateSelector",
	get: async ({ get }) => {
		const summonerName = get(summonerStateSelector);
		if (summonerName == undefined) return;

		const [matchesResponse, summoner] = await Promise.all([
			getMatchesByPuuid(summonerName.puuid),
			get(summonerStateSelector),
		]);

		return matchesResponse.data;
	},
});
