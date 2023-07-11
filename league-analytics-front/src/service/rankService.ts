import axios from "axios";
import ILeagueEntry from "model/IleagueEntry";

const config = {
	headers: {
		"Access-Control-Allow-Origin": "*", // Permitir qualquer origem (pode ajustar para uma origem específica)
		"Access-Control-Allow-Methods": " GET, POST, PATCH, PUT, DELETE, OPTIONS", // Método permitido
		"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", // Headers permitidos
	},
};

export function getLeagueEntrysByPuuid(summonerId: string) {
	const region = "BR";
	return axios.get(`http://localhost:8080/ranked/${summonerId}`, config);
}
export function getLeagueEntrysBySummonerIDFilter(summonerId: string) {
	return axios.get<ILeagueEntry[]>(`http://localhost:8080/ranked/filter/${summonerId}`, config);
}


