import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-3">
						<Card/>
					</div>
					<div className="col-3">
						<Card/>
					</div>
					<div className="col-3">
						<Card/>
					</div>
					<div className="col-3">
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
