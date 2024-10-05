import React from 'react'

export const Select = ({option,set}) => {
  return (
    <select id="select"
      onChange={(e)=>set(e.target.value)}
      className="border-indigo-500  text-sm rounded-full">
      {option && option.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
  </select>
 
    
  )
  
}
