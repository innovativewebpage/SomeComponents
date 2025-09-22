import React,{useState,useEffect} from 'react';

import Props2 from './Props2';
import './App.css';


function App() {
	
	const[value,setValue]=useState('')
	const[data,setData]=useState('');


var result1=''

	const submitData =()=> {
		
		 result1=value
		
	}
	


	
	
  return (
    <div >
		<Props2  result={result1} />
		
		<input type="text" value={value}  onChange={(e)=>setValue(e.target.value)}/>
		<button onClick={()=>submitData()}>Submit</button>
	
    </div>
  );
}

export default App;
