import { useEffect,useContext,useState} from 'react'
import { BackButton } from '../sheard/BackButton'
import { PageHeader } from '../sheard/PageHeader'
import {queryByYear } from '../config/firebaseFunc'
import { AppContext } from '../config/DataContext'
import { FaPlus, FaMinus } from "react-icons/fa";
import { sumValue,numberWithCommas } from '../config/func'
import { Table } from '../reactTable/Table'

//import {pensionHeader,rentHeader} from '../sheard/tableHeaders'
//import { ReactTable } from '../sheard/ReactTable'
//import {columns} from '../reactTable/rentColumns'

export const ShowIncomes = () => {
  const [data, setData] = useState([])
  const [header, setHeader] = useState([])
const [sog, setSog] = useState('')

  const { rent, setRent,
    salary, setSalary,
    pension, setPension,
    bl, setBl,
    year, setYear,
  } = useContext(AppContext)
  
  // get the correct year on sart
  useEffect(() => {
    const d = new Date()
   setYear(d.getFullYear()) 
  }, [setYear])
// hendel data By year
  useEffect(() => {
    const rent = 'rent'
    const salary = 'salary'
    const pension= 'pension' 
    const bl = 'bl-income' 
     
    try {
      queryByYear(rent, year, setRent)
      queryByYear(salary,year, setSalary)
      queryByYear(pension,year,  setPension)
      queryByYear(bl,year,  setBl)
    }
    catch {
      console.log('err')
    }    
  }, [year, setRent, setSalary, setPension, setBl])
  
  useEffect(() => {
    switch (sog) {
      case  'rent':
        setData(rent)
        setHeader(rentHeader)
        break
      case 'salary':
        setData(salary)
        setHeader(salaryHeader)
        break
      default:
        setHeader([])
        setData([])
    }
  },[sog])
  
  const Year = () => {
    return (
        <div className='flex justify-between gap-4 rounded-full py-1 px-5 text-lg font-semibold  text-white    bg-gray-600 '>
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
  
  const IncomeCard = ({kotert, noLenth,sumValue}) => {
    return (
       <div className='bg-gray-600 text-white font-semibold text-center p-1 rounded-lg mt-2'>
            <p>{kotert}</p>
            <p>מספר רשומות  {noLenth}</p>
            <p>סך לתקופה   {sumValue } שח</p>
          </div>
    )
  }

  // header table fields

  const rentHeader = [
    { field: 'month', name: 'חודש' },
    { field: 'date', name:'תאריך'},
    { field: 'pratim', name: 'פרטים' },
    {field: 'neto',name:'סכום'},
  ]
  const salaryHeader = [
    { field: 'month', name: 'חודש' },
    { field: 'date', name: 'תאריך' },
    { field: 'broto', name: 'שכר ברוטו' },
    { field: 'gmavid', name: 'גמל מעביד' },
    { field: 'pmavid', name: 'פיצויים מעביד' },
    { field: 'hismavid', name: 'קרן השתלמות מעביד' },
    { field: 'blmavid', name: 'ביטוח לומי מעביד' },
    { field: 'totalmavid', name: 'סך עלות מעביד' },
    { field: 'tax', name: 'מס הכנסה' },
    { field: 'bl', name: 'ביטוח לאומי' },
    { field: 'br', name: 'מס בריאות' },
    { field: 'gemel', name: 'קופת גמל' },
    { field: 'histlmot', name: 'קרן השתלמות' },
    {field: 'neto',name:'שכר נטו'},
    { field: 'pratim', name: 'פרטים' },
  ]


/*
  const ShowTableBtn = () => {
    return (
      <button onClick={showRentTable}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
    )
  }
    
  const heandelSogData = (sog) => {
    return (
      <button onClick={()=> setSog(sog)}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
    )
  }
  

  const showRentTable = () => {
    setData(rent)
    setHeader(rentHeader)
    
  }
*/
  return (
    <>
    <div className='flex justify-around mt-4'>
      <div className='place-content-center'><BackButton /></div>
      <div><PageHeader word={` הכנסות לשנת  ${year} `} /></div>
      <div className='place-content-center'><Year /></div>
      </div>
      <div className='container mx-auto p-2' >
        <div className='flex justify-around'>
          <div className='' >
            <IncomeCard
              kotert='הכנסות שכר '
              noLenth={salary && salary.length}
              sumValue={numberWithCommas(sumValue(salary,'neto')) }
          />
            <button onClick={()=> setSog('salary')}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
            </div>
          <div className=''>
          <IncomeCard
              kotert='הכנסות פנסיה '
              noLenth={pension && pension.length}
              sumValue={numberWithCommas(sumValue(pension,'neto')) }
          />
          <button onClick={()=> setSog('pension')}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
          </div>
          <div className=' '>
          <IncomeCard
              kotert='ביטוח לאומי'
              noLenth={bl && bl.length} 
              sumValue={numberWithCommas(sumValue(bl,'neto')) }
          />
            <button onClick={()=> setSog('bl')}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
            </div>
          <div className=' '>
          <IncomeCard
            kotert='שכר דירה'
            noLenth={rent && rent.length}
            sumValue={numberWithCommas(sumValue(rent,'neto'))}
            />
            <button onClick={()=> setSog('rent')}  className="rounded-full mt-1 justify-center  py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white">הצג טבלה</button>
          </div>
          
        </div>
      </div>
      <Table data={data} header={header} />
    </>
    
  )
}


/*
<Table data={pension} header={pensionHeader} />
*/