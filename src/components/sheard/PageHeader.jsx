import React from 'react'

export const PageHeader = ({ word }) => {
  return (
    <div>
      <header className="bg-gray-600  mx-auto text-3xl text-white   rounded-xl ">
        <section className="p-3 m-2 ">
          <h1 className='text5xl text-center font-medium'> { word}</h1>
        </section>
      </header>
    </div>
  )
}

