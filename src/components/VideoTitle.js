import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-36 px-8 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black hover:bg-opacity-80 rounded-md w-32 text-xl my-2 py-1 px-0 md:mx-2 md:py-2'> ▶ Play</button>
        <button className='hidden md:inline-block  bg-gray-500 text-white bg-opacity-50 hover:bg-opacity-80 rounded-md w-32 text-xl mx-2 py-2'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle