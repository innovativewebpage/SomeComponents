import React,{useState} from 'react';
import './App.css';
function MyOwn1()
{
	const[text1,setText1]=useState('');
	const[text2,setText2]=useState('');
	const submitData=()=>{
		setText2(text1)
	}
		return(	
				<div className="App">
						<input 
						type="text" 
						value={text1} 
						onChange={(e)=>setText1(e.target.value)}   /><br/>
						<button onClick={()=>submitData()}>Submit</button><br/>
						<input type="text" value={text2} readOnly/>
				</div>
			)	
}

export default MyOwn1;