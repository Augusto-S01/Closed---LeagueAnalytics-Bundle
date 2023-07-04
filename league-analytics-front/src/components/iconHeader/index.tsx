import React, { useState, useEffect } from "react";
import gif from "../../assets/runeterra-calculated.gif";
import classNames from "classnames";
import style from "./iconHeader.module.scss";

interface Props{
	size: string;
}

function IconHeader({size}:Props) {
	const [gifSrc, setGifSrc] = useState(gif);

	useEffect(() => {	
		const interval = setInterval(() => {
			const random = Math.random();
			setGifSrc(gif + "?" + random);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return <img src={gifSrc} alt="GIF" className={classNames({
		[style.iconHome] : size == "home",
		[style.iconHeader] : size == "header",
		
		
	})} />;
}

export default IconHeader;