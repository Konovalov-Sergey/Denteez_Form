import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={this.props.className}>
				{this.props.text}
				<label for="">
					{this.props.title} <br/>
					<input 
						type={this.props.type}
						{...this.props}
					/>
				</label>
			</div>
		);
	}
	
}

export default Input;