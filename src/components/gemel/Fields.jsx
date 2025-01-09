import {useEffect,useState} from 'react'
import { BackButton } from '../sheard/BackButton'
import { readData, readDocById } from '../config/firebaseFunc'
import { FaPlus, FaTrash } from 'react-icons/fa';

export const Fields = () => {
  const [header, setHeader] = useState([])
  const [columns, setColumns] = useState([])

  let myArr = []
  
  useEffect(() =>
  {
    const collection = 'options'
    const docId = 'gemelHeaders'
    const data = readDocById(collection, docId, setHeader)
    
  }, [])
  console.log(myArr)

  const addToDefult = (rec) => {
    
    setColumns([...columns, rec])
    console.log(columns)
    console.log(rec)
  }

  return (
    <>
    <div className='flex justify-around'>
     <BackButton /> 
      Fields
      </div>
      <div className='flex justify-center bg-slate-300'>
        <div>
          <table className='table-auto  '>
            <caption>רשימת שדות לבחירה</caption>
            <thead className='bg-gray-50 border-b-2 border-gray-800'>
              <tr className='flex justify-around' >
               <th className=' '>בחר</th>
               <th className=' '>שם שדה</th>
              </tr>
            </thead>
            <tbody>
              
           {header && header.map((rec,i) =>
          <tr className='flex justify-around' key={i} >
               <td><button onClick={() => addToDefult(rec)
            }>+</button></td>
            <td className='mx-1' >{rec.header}</td>
            </tr>
        )}
            </tbody>  
          </table>
        </div>
        <div>
          <table className='table-auto'>
            <caption>רשימת שדות </caption>
            <thead>
              <tr>
               <th>הסר</th>
               <th>שם שדה</th>
              </tr>
            </thead>
            <tbody> 
           {columns && columns.map((rec,i) =>
          <th key={i} className='flex '>
               <td><button onClick={() => addToDefult(rec)
            }>-</button></td>
            <td className='mx-1' >{rec.header}</td>
            </th>
        )}
            </tbody>  
          </table>
        </div>
      </div>
      
      </>
  )
}
