import React from "react";
import BackgroundVideo from "../../components/backgroundVideo";
import IconHeader from "../../components/iconHeader";
import style from "./home.module.scss";
import SearchInput from "../../components/searchInput";


function Home(){
	return(
		<React.Fragment>
			<BackgroundVideo coverType="fullCover"/>
			<section className={style.content}>
				<div className={style.head_container}>
					<IconHeader size="home"/>
					<h1 className={style.head_container__title}>League Analytics</h1>
				</div>
				<SearchInput></SearchInput>
			</section>
		</React.Fragment>

	);
}

export default Home;