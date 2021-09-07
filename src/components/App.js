// create your App component here
import React, {useState, useEffect} from 'react'



function App(){
    const [status, setStatus ] = useState('pending');
    const [pics, setPics] = useState([])
    useEffect(()=>{fetch('https://dog.ceo/api/breeds/image/random')
                    .then(resp => resp.json())
                    .then(data=> {
                        setPics(data.message)
                        setStatus('success')
                    });}, []);
    
    if (status === 'pending'){
        return <h1>Loading...</h1>
    }










    return(
        <>
        <img src={pics} alt={'A Random Dog'}/>
        </>
    )
}


export default App;