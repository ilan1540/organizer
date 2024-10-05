import React from 'react'

export const CardMessage = ({mass}) => {
  return (
    <div className='m-auto rounded-full w-60 h-10 bg-blue-500 '
    ><h1 className='text-center p-1 text-xl font-black text-white'>{mass}</h1></div>
  )
}
