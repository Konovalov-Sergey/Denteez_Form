import React from 'react';

import Input from './Input';

class Form extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		let name = this.refs.name.value;
		console.log(name);
		console.log(this.refs.email.value);
	}
	render() {
		return (
			<form 
				id="form" 
				className={this.props.className} 
				onSubmit={this.handleSubmit}
				method="post">
				<div className="form_wrapper">
					<p>Fields marked “*” are required</p>
					<div>
						<label for="">
							Enquiry Type * <br/>
							<select name="" id="">
								<option>Other</option>
								<option>Other</option>
							</select>
						</label>
					</div>
					<Input 
						className="other" 
						type="text" 
						placeholder="Other" 
						title=""/>
					<Input 
						className="name" 
						required 
						ref="name"
						type="text" 
						placeholder="Dentist" 
						title="Name *"/>
					<Input 
						className="email" 
						required 
						ref="email"
						type="email" placeholder="rachelm@gmail.com" 
						title="Email *"/>
					<Input 
						className="subject"
						required 
						type="text" 
						title="Subject *"/>
					<div>
						<label for="">
							Description * <span>(0/1000)</span>
							<textarea required 
								name="description" 
								maxLength="1000" 
							>
							</textarea>
						</label>
					</div>
					<div className="image">
						<p>Add photo</p>
						<span>
							Minimum size of 300x300 jpeg ipg png 5 MB
						</span>
						<input type="file" accept="image/*"/>
					</div>
				</div>
				<Input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Form;