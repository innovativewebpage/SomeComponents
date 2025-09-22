import React from "react";


function App() {
const check = 0; // 0, "", null, undefined
return (
<div className="App">
{ check && <span>Hello</span> }
</div>
);
}


export default App;
