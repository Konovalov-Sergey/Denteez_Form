import React from 'react';

import { Link } from 'react-router-dom';

function Footer(props) {
	return (
		<section className="footer">
			<div className="inner">
				<p>Denteez Copyright 2015</p>
				<ul className="nav right">
					<li><Link to="/">Support</Link></li>
					<li><Link to="/">Privacy Policy</Link></li>
					<li><Link to="/">Terms of use</Link></li>
				</ul>
			</div>
		</section>
	);
}

export default Footer;