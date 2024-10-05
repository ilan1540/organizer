import  { useState ,useContext} from 'react'
import papa from 'papaparse'
import { AppContext } from '../config/DataContext'
import { FaFileUpload } from "react-icons/fa";

export const UploadBtn = () => {
  const [fileName, setFileName] = useState('בחר קובץ')
const {setCsvFile} = useContext(AppContext)



  const onGetCsvFilel = (e) => {
    try { 
         let fileObj = e.target.files[0]
      //   setFileName(e.target.files[0].name)
      papa.parse(fileObj, {
         header: true,
        skipEmptyLines: true,
        complete: function (result) {   
         // console.log(result)
          const tosave = {
            name:e.target.files[0].name ,
            result,
          }
          setCsvFile(tosave)
          } 
      })
    } catch (err) {
      console.log(err)
    }  
    }
   
  return (
    <div className='text-sm flex  bg-white h-8 text-center p-1 rounded-full hover: font-bold ' >
      
        <FaFileUpload className='text-xl ml-3' />
       <input
        type="file"
        id="upload"
        accept=".csv "
        onChange={onGetCsvFilel}
        hidden />
        <label className='cursor-pointer ' htmlFor="upload">{fileName} </label> 
     
      
        
    </div> 
    )
}


