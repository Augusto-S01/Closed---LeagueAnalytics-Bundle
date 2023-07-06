import axios from "axios";


export function getSummonerByNickname(nickname: string) {
	const config = {
		headers: {
			"Access-Control-Allow-Origin": "*", // Permitir qualquer origem (pode ajustar para uma origem específica)
			"Access-Control-Allow-Methods": "GET", // Método permitido
			"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token" // Headers permitidos
		}
	};

	return axios.get(`http://localhost:8080/league/${nickname}`, config);

}
