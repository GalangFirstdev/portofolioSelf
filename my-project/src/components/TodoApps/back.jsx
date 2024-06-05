import React from 'react'
import { useNavigate } from 'react-router-dom'


const Back = () => {
        const Navigate = useNavigate();
  return (
    <div>
      <button className='bg-slate-900 m-1 text-white flex items-center hover:bg-slate-600 font-bold p-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => Navigate("/")}>Back</button>
    </div>
  )
}

export default Back
