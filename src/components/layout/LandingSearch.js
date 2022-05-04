import React, {Component} from 'react';
import SearchStore from './SearchStore.js'
import './LandingSearch.css'
import stylesheet from './SearchStoreLanding.module.css'

class LandingSearch extends Component{

	render(){
		return(

					<div className="landing-search">
						<div className="searchComponent">
							<SearchStore style={stylesheet}/>
						</div>
					</div>


		);
	}
}

export default LandingSearch;
