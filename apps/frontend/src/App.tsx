import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [ping, setPing] = useState('');
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/ping`)
       .then((response) => response.json())
       .then((data) => {
          setPing(data.ping);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Discotech</h1>
      <div>{ping}</div>
    </div>
  )
}

export default App

