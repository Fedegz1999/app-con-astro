import React, { useEffect, useState } from 'react'

function Dinamico(){
    
    const [contenidoDinamico, setContenidoDinamico] = useState([])

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    setContenidoDinamico(data)
    console.log(data)
})
.catch((err)=> {
    console.log(err)
})


},[])



return (
<div>
    <h1>DINAMICO</h1>
    
    <ul>
        {contenidoDinamico.length ? 
        contenidoDinamico.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))
        : <p>ERROR</p>}
    </ul>
    </div>
)
}

export default Dinamico;