import React from 'react';
import './App.css';



function MyOwn2()
{	
	const[text1,setText1]=useState('');
	const[text2,setText2]=useState('');
	
	const submitData = () => {		
		//setText2(text1.split('').reverse().join(''))
		console.log(text1);		
	}
	
		return(				
				<div className="App">		
						<input type="text" value={text1} onChange={(e)=>setText1(e.target.value)}   /><br/>
						<button onClick={()=>submitData()}>Submit</button><br/>
						<input type="text" />
				</div>
		
			)	
	
	
	
}

export default MyOwn1;