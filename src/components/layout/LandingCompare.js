import React, {Component} from 'react';
import compareImg from './assets/Compare.svg'
import './LandingCompare.css'
import InfoCards from './InfoCards.js'

class ComparePage extends Component {

	state = {
		cards: [
			{
				id: 1,
				title: "Compare and Choose",
				description: "We aim at providing you with the best possible comparison of your nearby Doctors so you can get the best quality service at cheapest price.",
				buttonText: "Find Stores",
				buttonUrl: "/book_now",
			},
			{
				id: 2,
				title: "Healthcare under one Roof",
				description: "Get exclusive offers and discounts on your nearest Healthcare personnel with 99health. Explore your nearby doctors and visit them today!",
				buttonText: "My Account",
				buttonUrl: "/login",
			},
		]
	}

	render(){
		return(

			<div id="compare">
				<div className="comapare_container">
					<h1 className="heroTitle">Why <span id="nine-eye">99health?</span></h1>
					<div className="compare_content">
						<div className="leftContainer">
							<img className="compareImg" alt="compare and buy" src={compareImg}/>
						</div>
						<div className="rightContainer">
							<div className="cards">
								<InfoCards cards={this.state.cards}/>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default ComparePage;
