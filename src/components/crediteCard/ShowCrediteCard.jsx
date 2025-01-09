import {useEffect, useContext,useState } from 'react'
import { AppContext } from '../config/DataContext'
import { PageHeader } from '../sheard/PageHeader'
import { YearHendel } from '../sheard/YearHendel'
import { queryByYear } from '../config/firebaseFunc'
import { Table } from '../reactTable/Table'
import { BackButton } from '../sheard/BackButton'



export const ShowCrediteCard = () => {
  const [data, setData] = useState([])
  const [header, setHeader] = useState([])
  const {
    year, setYear, creaditeCard,setCreadieCard,
  } = useContext(AppContext)

  // get the correct year on sart
  useEffect(() => {
    const d = new Date()
   setYear(d.getFullYear()) 
  }, [setYear])

  // hendel data By year
  useEffect(() => {
    const crediteCard = 'crediteCard'
    
     
    try {
      queryByYear(crediteCard,year, setCreadieCard)
    }
    catch {
      console.log('err')
    }    
  }, [year, setCreadieCard])

  useEffect(() => {
    setData(creaditeCard)
    setHeader(creaditeCardHeader)
  },[creaditeCard])
  
  const creaditeCardHeader = [
    { field: 'billingDate', name: 'תאריך חיוב' },
    { field: 'buyDate', name:'תאריך רכישה'},
    { field: 'cardNo', name: 'מס כרטיס' },
    { field: 'storeName', name: 'שם בית העסק' },
    { field: 'totalPurch', name: 'סכום העסקה' },
    { field: 'debitAmount', name: 'סכום החיוב' },
    { field: 'moreDetailses', name: 'פרטים נוספים' },
  ]


  return (
    <>
      <div className='flex justify-around items-center'>
        <BackButton />
        <div className=''><YearHendel /></div>
        <div className=''><PageHeader word={`הצגת כרטיסי אשראי לשנת ${year} `} /> </div>
        <div className=''>3</div>
      </div>
    <div className='flex justify-around items-center'>
          
      
     
      </div>
       {data ? (<Table data={data} header={header} />):(null)}
      </>
  )
}
