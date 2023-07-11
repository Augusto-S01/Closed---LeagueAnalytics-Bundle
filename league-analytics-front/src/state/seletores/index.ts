import ISummonerName from "model/ISummonerName";
import ILeagueEntry from "model/IleagueEntry";
import { useParams } from "react-router-dom";
import { selector, waitForAll } from "recoil";
import { getMatchesByPuuid } from "service/matchService";
import { getLeagueEntrysByPuuid } from "service/rankService";
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

		const [matchesResponse] = await Promise.all([
			getMatchesByPuuid(summonerName.puuid,undefined,undefined,undefined,undefined,0,3)
		]);

		return matchesResponse.data;
	},
});

export const LeagueEntrystateSelector =  selector({
	key: "leagueEntrystateSelector",
	get: async ({ get }) => {
		const summonerName = get(summonerStateSelector);
		if (summonerName == undefined) return;

		const [matchesResponse] = await Promise.all([
			getLeagueEntrysByPuuid(summonerName.id)
		]);

		return matchesResponse.data;
	},
});

export const SoloDuoEntrytateSelector = selector({
	key: "soloDuoEntrytateSelector",
	get: async ({ get }) => {
		const leagueEntry = await get(LeagueEntrystateSelector);
		if (leagueEntry == undefined) return;
		console.log(leagueEntry);
		const entry = leagueEntry.find((entry:ILeagueEntry) => {
			if(entry.queueType == "RANKED_SOLO_5x5"){
				console.log("Dentro do seletor");
				console.log(entry);
				return entry;
			}
		});

		return entry;
	},
});

export const FlexEntrytateSelector = selector({
	key: "flexEntrytateSelector",
	get: async ({ get }) => {
		const leagueEntry = await get(LeagueEntrystateSelector);
		if (leagueEntry == undefined) return;
		console.log(leagueEntry);
		const entry = leagueEntry.find((entry:ILeagueEntry) => {
			if(entry.queueType == "RANKED_FLEX_SR"){
				console.log("Dentro do seletor");
				console.log(entry);
				return entry;
			}
		});

		return entry;
	},
});