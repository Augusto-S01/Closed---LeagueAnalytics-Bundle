import IParticipantResumed from "./IParticipantResumed";

interface IMatch {
	gameCreation: number;
	matchId: string;
	gameMode: string;
	gameType: string;
	blueTeam: IParticipantResumed[];
	redTeam: IParticipantResumed[];
}

export default IMatch;