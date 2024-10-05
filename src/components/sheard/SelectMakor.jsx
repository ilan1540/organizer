//import {useState} from 'react'


export const SelectMakor = ({setMakor}) => {
  

  return (
    <select id="makor"
      onChange={(e)=>setMakor(e.target.value)}
      className="border-indigo-500  text-sm rounded-lg  p-2.5">
    <option value="ilan">אילן</option>
    <option value="hadas">הדס</option>
    <option value="shared">משותף</option>
  </select>
 
    
  )
}


/*
 <div className="flex gap-10">
  <div className="inline-flex content-center ">
    <label className="relative flex items-center cursor-pointer" forhtml="html">
          <input
            name="אילן"
            onClick={(e)=>setUser(e.target.name)}
            type="radio"
            id="ilan"  />
      
    </label>
    <label className="m-2 font-bold text-base-italic cursor-pointer text-sm" forhtml="html">אילן</label>
  </div>
 <div className="inline-flex content-center ">
    <label className="relative flex items-center cursor-pointer" forhtml="html">
          <input
            name='הדס'
            onClick={(e)=>setUser(e.target.name)}
            type="radio"
            id='hadas' />
            
    </label>
    <label className="m-2 font-bold text-base-italic cursor-pointer text-sm" forhtml="html">הדס</label>
  </div>
  
</div>
*/
