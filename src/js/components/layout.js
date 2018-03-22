// Externals
import React from 'react';
//Routing functions
import router from './router';
//Components
import MenuLeft from './menu';
import HomePage from '../views/home';

class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			Component : HomePage
		};
	}

	componentDidMount(){
		router.registerRefresh(this.refreshPage.bind(this));
	}

	refreshPage(component){
		this.setState({
			Component : component
		});
	}

	render(){
		const {Component} = this.state;
		return (
			<div className='layout'>
				<MenuLeft/>
				<div className='content'>
					<Component />
				</div>
			</div>
			);
		}
	}

Layout.displayName=('layout');
export default Layout;
