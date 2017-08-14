import React from 'react';

import Bg from '../img/bg_service.jpg';

const bg = {
	background: `url(${Bg}) no-repeat center`,
	backgroundSize: 'cover'
}

function Service(props) {
	return (
		<section className="service" style={bg}>
			<div className="inner">
			</div>
		</section>
	);
}

export default Service;