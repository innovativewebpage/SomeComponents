import React, { useEffect, useState } from 'react';


function Rendersimple() {
    const [user, setUser] = useState([]);


    useEffect(() => {
        const getData = async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            let result = await response.json();
            setUser(result)
        }


        getData()
    }, [])

    return (
        <>
            {user.map((row, index) => (
                <>
                    <li>{row.name}</li>
                    <li>{row.username}</li>
                    <li>{row.email}</li>
                    <li>----</li>
                </>
            ))}
        </>


    )
}
export default Rendersimple