import IParticipantResumed from "./IParticipantResumed";

interface IMatchResumed {
	gameCreation: number;
	matchId: string;
	gameMode: string;
	gameType: string;
	blueTeam: IParticipantResumed[];
	redTeam: IParticipantResumed[];
}

export default IMatchResumed;