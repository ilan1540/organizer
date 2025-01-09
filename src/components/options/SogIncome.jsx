import {useState,useEffect,useContext} from 'react'
import { PageHeader } from '../sheard/PageHeader'
import { FaPlus, FaTrash } from 'react-icons/fa';
import { getData } from '../config/firebaseFunc';
import { useNavigate } from 'react-router-dom';
import {AppContext} from '../config/DataContext'

export const SogIncome = () => {
  const {options, setOptions} =useContext(AppContext) 
  const [sogIncome, setSogIncome] = useState()
  const [incomeName, setIncomeName] = useState()
  const [add, setAdd] = useState()
  const [itemSelect, setItemSelect] = useState()
   const navigate = useNavigate();

  

  // read from firebase
  useEffect(() => {
    const colName = 'options'
    const docName = 'incomeName'
   getData(colName, setOptions)
  //  console.log(options)
  }, [])

  
//set income name to state
  useEffect(() => {
    if (options && options.incomeName) {
      setIncomeName(options.incomeName)
    }
   // setIncomeName(options.incomeName)
  }, [options])
// remove item from list
  useEffect(() => {
    const result = incomeName && incomeName.filter((item)=> item !== itemSelect) 
    setIncomeName(result)
  }, [itemSelect])

  const addItemToList = () => {
    setIncomeName([...incomeName, add])
    setAdd('')
  }
// save the list to firebase  and go home
  const handelSave = () => {
    const colName = 'options'
    const docId = 'incomeName'
    const toSave = {
      incomeName
    }
  //  setRec(colName,docId,  toSave)
    navigate('/')
  }


  return (
    <div className='container mt-1  mx-auto'>
      <PageHeader word='טיפול בטבלאות' />
      <div className='bg-white w-1/4 flex flex-col justify-center items-center mx-auto rounded-xl'> 
        <div className='flex justify-center items-center gap-2 p-3'>
          <FaPlus className='cursor-pointer'
          onClick={addItemToList}
          />
          <input className="border-indigo-500 "
            type='text'
            value={add}
            onChange={(e)=>setAdd(e.target.value)  }
            placeholder='הוסף סוג הכנסה'
          />
        </div>
        <div className='flex justify-center items-center gap-2 p-3'>
          <table className='table-auto'>
            <thead>
              <tr>
               <th>#</th>
               <th>סוג הכנסה</th>
              </tr>
            </thead>
            <tbody>
              {incomeName ? (incomeName.map((item,i) => <tr className='cursor-pointer' key={i} onClick={()=>setItemSelect(item)}>
                <td><FaTrash /></td>
                <td>{item}</td>
             </tr>)):(null)}
            </tbody>
          </table>
        </div>
        <div className='p-2'>
          <button onClick={handelSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               שמור
          </button>
        </div>
         
      </div>
      
    </div>
  )
}
