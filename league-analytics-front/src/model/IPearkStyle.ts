import IPerkStyleSelection from "./IPearkStyleSelection";


interface IPerkStyle {
	description: string;
	selections: IPerkStyleSelection[];
	style: number;
}

export default IPerkStyle;