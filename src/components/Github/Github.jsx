import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setData]= useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users/Hannan188')
        .then((res)=> res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-white bg-gray-800 p-4 text-center text-2xl'>
      Github Follower are:{data.followers}
      <img src='https://images.pexels.com/photos/2799556/pexels-photo-2799556.jpeg' className='w-90 h-70'/>
    </div>
  )
}

export default Github
