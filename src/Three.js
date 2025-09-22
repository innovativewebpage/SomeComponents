import React from 'react';

import Home from './Home';
import About from './About';

import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


function Three()
{
	return(
		<div>				
				<Router>
					<Routes>
						<Route path="/" element={<Home/>}>Home</Route>
						<Route path="/about" element={<About/>}>About</Route>	
				   </Routes>
				</Router>
				
	</div>
	)	
}

export default Three;
