import React,{useState} from "react";
import Employee from './data.json'


const EmployeeFetch = () => {


		return (
			<div>
				<h3>Employee Fetch</h3>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>Employee Name</th>
						
						
					</tr>
				</thead>
			{Employee.map((value,index) => (
			
			
				<tbody key={value.id}>
					
			
				<tr >
				<>
					<td>{value.userId}</td>
					<td>{value.title}</td>
				
				</>
				</tr>
			
				
				</tbody>
					))}
				
			</table>
		</div>
  );
};

export default EmployeeFetch;