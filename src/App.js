import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

	const [value, setValue] = useState('')
	const [data, setData] = useState('');
	var result = '';

	//console.log(value);


	/*useEffect(()=>{
		result = value.split('').reverse().join('');	
		//console.log(result);
		setData(result)
	},[value])
	*/


	// const submitData=useCallback()=>{

	// 	//console.log(value)

	// 		result = value.split('').reverse().join('');	
	// 		//console.log(result);
	// 		setData(result)

	// }


	return (
		<div >


			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={() => submitData()}>Submit1</button>
			<input type="text" value={data} />
		</div>
	);
}
export default App;
