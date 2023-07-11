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
