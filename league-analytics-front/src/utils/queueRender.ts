import moment from "moment";
import queues  from "./queues.json";


export const queueRank = (queue: string) => {
	if(queue  === "RANKED_SOLO_5x5"){
		return "Ranqueada Solo/Duo";
	}
	if(queue === "RANKED_FLEX_SR"){
		return "Ranqueada Flex";
	}
};


export const queueRender = (queueId: number) => {
	console.log(queueId);
	const queue = queues.find((queue) => queue.queueId == queueId);
	if (queue) {
		return queue.descricao;
	}else {
		return "Custom game";
	}
};

export function formatDataHora(dataHora: number): string {
	const dataAtual = moment();
	const dataInformada = moment(dataHora);

	if (dataInformada.isSame(dataAtual, "day")) {
		return `Hoje - ${dataInformada.format("HH:mm")}`;
	} else if (dataInformada.isSame(dataAtual.clone().subtract(1, "day"), "day")) {
		return `Ontem - ${dataInformada.format("HH:mm")}`;
	} else if (dataInformada.isAfter(dataAtual.clone().subtract(1, "day"))) {
		return `Há ${dataAtual.diff(dataInformada, "hours")} horas`;
	} else if (dataInformada.isAfter(dataAtual.clone().subtract(6, "days"))) {
		return `Há ${dataAtual.diff(dataInformada, "days")} dias`;
	} else if (dataInformada.isAfter(dataAtual.clone().subtract(1, "month"))) {
		return `Há ${dataAtual.diff(dataInformada, "weeks")} semanas`;
	} else if (dataInformada.isAfter(dataAtual.clone().subtract(11, "months"))) {
		return `Há ${dataAtual.diff(dataInformada, "months")} meses`;
	} else {
		return "Há muito tempo";
	}
}