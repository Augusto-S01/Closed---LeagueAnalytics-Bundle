import ILeagueEntryResume from "./ILeagueEntryResume";
import IMatchResumed from "./IMatchResumed";
import ISummonerNameResumed from "./ISummonerNameResumed";


interface IHomepageInfo {
	summoner: ISummonerNameResumed;
	leagueEntrys: ILeagueEntryResume[];
	listMatchsResumed: IMatchResumed[];
}

export default IHomepageInfo;