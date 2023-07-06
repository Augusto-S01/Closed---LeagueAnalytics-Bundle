import IPerks from "./IPearks";

interface IParticipantResumed {
	teamId: number;
	summoner1Id: number;
	summoner2Id: number;
	championName: string;
	lane: string;
	role: string;
	individualPosition: string;
	kills: number;
	assists: number;
	deaths: number;
	kda: number;
	tier: string;
	rank: string;
	summonerName: string;
	perks: IPerks;
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	win: boolean;
}

export default IParticipantResumed;