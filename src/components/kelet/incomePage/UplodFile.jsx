import { useState,useEffect, useContext } from 'react'

import { UploadBtn } from '../../sheard/UploadBtn'
import { Select } from '../../sheard/Select'
import { AppContext } from '../../config/DataContext'
import { addNewDoc } from '../../config/firebaseFunc'

export const UplodFile = () => {
  const [select, setSelect] = useState()
  const [data, setData] = useState()
  const [length, setLength] = useState(0)
  const [fileName, setFileName] = useState()
const [mass, setMass] = useState('>לא נבחר קובץ או סוג קלט')

  const { csvFile,setHandelAdd,hendelAdd } = useContext(AppContext)

  useEffect(() => {
    if (csvFile && select) {
      let { name } = csvFile 
      let { data } = csvFile.result
      setData(csvFile.result)
      setLength(data && data.length)
      setFileName(csvFile.name)
    }
  },
    [csvFile,select,data])
 
  
  
  
  const Card = () => {   
    return (
      <div className='bg-white rounded-xl mx-auto w-40 h-30 font-bold text-sm'>
        <div className='p-1 flex justify-between'>
          <label>שם קובץ</label>
          <span>{ fileName}</span>
        </div>
        <div className='p-1 flex justify-between'>
          <label> מספר רשומות</label>
          <span>{length}</span>
        </div>
      </div>
    )
  } 

  const Massage = () => {
    return (
      <div className='flex justify-center ml-28'>
          <div className='bg-white rounded-xl flex justify-center w-48 p-2 h-35 font-bold text-sm '>
        <p className='text-red-900'>{mass} </p>
        </div>
      </div>

    )
    
  }
  
  const option = [
  {
    value: 'sog',
    name: 'בחר סוג קלט'
  },
    {
    value: 'salary',
    name: 'משכורת'
  },
    {
    value: 'pension',
    name: 'פנסיה'
    },
    {
    value: 'bl-income',
    name: 'ביטוח לאומי'
    },
    {
    value: 'rent',
    name: 'שכר דירה'
  },
    
  ]

  const handelSaveData = () => {
    data && data.data.map((rec) => addNewDoc(select, rec,setHandelAdd))
    setMass(hendelAdd)
    setData(null)
    setSelect(null)
    setLength(0)
  }

  return (
    <div>
    <div className='flex justify-center h-20  gap-3'>
      <div className="w-28 my-auto">
       <UploadBtn  />      
        </div>
        <div className="w-40 my-auto">
    <Select option={option} set={setSelect}/>
  </div>
  
        <div className=" w-32 my-auto ">
          {length && select ? (
            <button className="rounded-full w-28 py-1 px-3 font-bold text-sm  bg-white cursor-pointer hover:bg-white hover:font-bold hover:text-lg/4"
             onClick={handelSaveData} 
              
            >שמור נתונים</button>) :
            (null)}
    
  </div>  
      </div> 
      {length && select ? (<Card /> ):(<Massage />)}
       
    </div>
  )
}
