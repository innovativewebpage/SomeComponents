import React,{useState} from 'react';
import './App.css';

import MyProps2 from './MyProps2';


function Myprops1()
{
const[text1,setText1]=useState('')	
const[text2,setText2]=useState('')
	
	
	
	const submitData =() => {
		setText2(text1.split('').reverse().join(''))
	}
	
	console.log(text2)
		


	return(
	
			<div className="App">
				<input type="text" value={text1} onChange={(e)=>setText1(e.target.value)}/>
				<button onClick={()=>submitData()}>Submit</button>
				<MyProps2  text2={text2}/>
			</div>
	     )
}

export default Myprops1