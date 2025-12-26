import React from 'react'
import Chat from '../src/components//Chat'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigete=useNavigate()
  return (
    <>
    
    <div>
<h1 className='text-center font-stretch-90% '>Welcome to our page 🤗🤠</h1>

    </div>
      <button onClick={()=>navigete("/chat")} className='btn btn-bg-bule text-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Start here..</button>
    
    </>
  )
}

export default Home
