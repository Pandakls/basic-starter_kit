// Externals
import React from 'react';
//Router functions
import router from './router';
let navigate = router.navigate;

class MenuLeft extends React.Component {
	
	constructor() {
		super();
		this.state = {
		};
	}
	
	render(){
		return (
			<div className='menu-left'>
				<div className='app-title'>
					<div className='title'>
					JDR - Generator
					</div>
				</div>
				<div className='menu-links'>
					<div className='menu-item' onClick={() => {navigate('home')}}>
						Home
					</div>
					<div className='menu-item' onClick={() => {navigate('items')}}>
						Items
					</div>
				</div>
			</div>
		);
	}
}

MenuLeft.displayName=('menu');
export default MenuLeft;
