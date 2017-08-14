import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Form from './Form';

import Logo from '../img/Logo.png';

const logo = {
	background: `url(${Logo}) no-repeat center`,
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			output: false
		};
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState({output: true})
	}
	render() {
		return (
			<header className="header">
				<div className="inner">
					<div className="logo left">
						<Link to="/" style={logo}></Link>
					</div>
					<Form 
						className={this.state.output ? "" : "hidden"}
						onSubmit={this.handleSubmit}
					/>
					<Button 
						className="btn right" 
						title="Log In Now"
						onClick={this.handleClick}
					/>
				</div>
			</header>
		);
	}
}

export default Header;