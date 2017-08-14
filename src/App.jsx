import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Promo from './components/Promo';
import Service from './components/Service';
import About from './components/About';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return (
			<BrowserRouter>
				<main>
					<Header />
					<Promo />
					<Service />
					<About />
					<Footer />
				</main>
			</BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));