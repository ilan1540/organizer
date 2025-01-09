import {useContext,useEffect} from 'react'
import { AppContext } from '../config/DataContext'
import { FaPlus, FaMinus } from "react-icons/fa";

export const YearHendel = () => {

  const {
    year, setYear,
  } = useContext(AppContext)

  useEffect(() => {
    console.log(year)
  },[])
  
  return (
   <div className='flex justify-between gap-4 rounded-full py-1 px-5  text-lg font-semibold  text-white    bg-gray-600 '>
        <div className='mt-1.5 cursor-pointer'><button onClick={() => {
          let y = year
          y++
          setYear(y)
        }} ><FaPlus /></button> </div>
           {year}
          <div className='mt-1.5 cursor-pointer'><button onClick={() => {
          let y = year
          y--
          setYear(y)
        }} ><FaMinus /></button></div>
        </div> 
  )
}
