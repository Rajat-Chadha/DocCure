import React from "react";
import "./Home.css";
import ComparePage from "./LandingCompare.js";
import LandingSearch from "./LandingSearch.js";
import BlogCollection from "./BlogCollection.js";
import { useClearCache } from "react-clear-cache";
import Popup from "./Popup";
import { Helmet } from "react-helmet";

const Home = () => {
	const { isLatestVersion, emptyCacheStorage } = useClearCache();
	return (
		<div className="home-page">
			{!isLatestVersion && (
				<Popup
					title="Update website by clicking on the button below"
					btn_text="Update"
					trigger={() => emptyCacheStorage}
					btn_to="#"
				/>
			)}
			<Helmet>
				<meta charSet="utf-8" />
				<title>99Health | Your Healthcare Buddy</title>
				<meta
					name="description"
					content="99Health’s mission is to create a one stop destination for all healthcare related needs. With 99health it is easier for everyone to find a nearby doctor and book video or in-clinic appointments on the go."
					data-react-helmet="true"
				/>
			</Helmet>
			<LandingSearch />
			<ComparePage />
			<BlogCollection />
		</div>
	);
};

export default Home;
