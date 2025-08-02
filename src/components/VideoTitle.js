import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black hover:bg-opacity-80 rounded-md w-32 text-xl mx-2 py-2'> ▶ Play</button>
        <button className='bg-gray-500 text-white bg-opacity-50 hover:bg-opacity-80 rounded-md w-32 text-xl mx-2 py-2'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle