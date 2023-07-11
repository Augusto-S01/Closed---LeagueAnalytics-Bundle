import axios from "axios";
import IMatchResumed from "model/IMatchResumed";

const config = {
	headers: {
		"Access-Control-Allow-Origin": "*", // Permitir qualquer origem (pode ajustar para uma origem específica)
		"Access-Control-Allow-Methods": "GET", // Método permitido
		"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", // Headers permitidos
	},
};

export function getMatchesByPuuid(
	puuid: string,
	startTime?: number,
	endTime?: number,
	queue?: number,
	type?: string,
	start?: number,
	count?: number) {
	let url = `http://localhost:8080/match/matchResumedByPuuid/${puuid}`;
	const params : Record<string,string | undefined>= {
		startTime : startTime?.toString(),
		endTime : endTime?.toString(),
		queue : queue?.toString(),
		type : type?.toString(),
		start : start?.toString(),
		count : count?.toString(),
	};
	let primeiroParametro = true;
	for (const key in params) {
		if( params[key] != undefined || params[key] != null){
			if(primeiroParametro) {
				
				url = url + `?${key}=${params[key]}`;
				primeiroParametro = false;
				
			} else {
				url = url + `&${key}=${params[key]}`;
				
			}
		}
	}
	try{
		const response = axios.get<IMatchResumed[]>(url, config);
		return response;
	}
	catch(error){
		console.log(error);
		throw error;
	}
}