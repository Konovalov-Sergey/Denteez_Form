import React from 'react';

import Bg from '../img/bg_promo.jpg';

const bg = {
	background: `url(${Bg}) no-repeat center`,
	backgroundSize: 'cover'
}

function Promo(props) {
	return (
		<section className="promo" style={bg}>
			<div className="inner">
				<h1>Home of Dentistry</h1>
				<p>
					Denteez was created by dentists for dentistry in order to
					make the life of everyone involved in dentistry easier.
				</p>
			</div>
		</section>
	);
}

export default Promo;