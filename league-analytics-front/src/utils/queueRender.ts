

export const queueRender = (queue: string) => {
	if(queue  === "RANKED_SOLO_5x5"){
		return "Ranqueada Solo/Duo";
	}
	if(queue === "RANKED_FLEX_SR"){
		return "Ranqueada Flex";
	}
};