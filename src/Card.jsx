import React from 'react'

export default function Card({movieData}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg '>

        <img
        src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
        alt='Card image'
        className='w-full h-62 object-cover rounded-t-lg mb-4'
        />
        {/* card content */}
        <div>
            <h2 className='text-xl font-semibold mb-2'>{movieData.title}</h2>
            {/* description */}
            <p className='text-gray-600 mb-4'>{movieData.overview}</p>
            {/* rating */}
            <div className='flex items-center space-x-2'>
                <span className='text-yellow-500 font-bold'>Rating</span>
                 <span className='text-gray-800 font-semibold'>{movieData.vote_average}</span>
            </div>
        </div>

    </div>
  )
}
