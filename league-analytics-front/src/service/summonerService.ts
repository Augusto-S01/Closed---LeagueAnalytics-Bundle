import axios from "axios";
import ISummonerName from "model/ISummonerName";
import { useParams } from "react-router-dom";

const config = {
	headers: {
		"Access-Control-Allow-Origin": "*", // Permitir qualquer origem (pode ajustar para uma origem específica)
		"Access-Control-Allow-Methods": " GET, POST, PATCH, PUT, DELETE, OPTIONS", // Método permitido
		"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", // Headers permitidos
	},
};



export function getSummonerByNickNameAndRegion(nickname: string) {
	const region = "BR";
	
	try{
		const response = axios.get<ISummonerName>(`http://localhost:8080/summoner/${region}/${nickname}`, config);
		return response;
	}
	catch(error){
		console.error("Erro ao obter informações do invocador:", error);
		throw error;
	}
}
export function verifySummoner(nickname: string) {
	return axios.get(`http://localhost:8080/summoner/verifySummoner/${nickname}`, config);
}

export function getSummonerByQuery() {
	const region = "BR";
	const { summonarName } = useParams();
	if(summonarName == undefined) return;
	axios.get(`http://localhost:8080/summoner/${region}/${summonarName}`, config).then((response) => {
		return response;
	}
	);
}

