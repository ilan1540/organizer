import {useState , useEffect,useContext} from 'react'
import { BackButton } from '../sheard/BackButton'
import { PageHeader } from '../sheard/PageHeader'
import { readData } from '../config/firebaseFunc'
import { AppContext} from '../config/DataContext'
export const ShowIncomes = () => {

  const { rent, setRent } = useContext(AppContext)




  let data = []

  if ( data.length > 0) {
      setRent(data)
      console.log(data) 
    }
  
  useEffect(() => {
    
    const colName = 'rent'
    try {
      readData(colName, data , setRent) 
   
    }
    catch {
      console.log('err')
    }
    
     
    


},[])
  return (
    <>
    <div className='flex justify-around mt-4'>
      <div className='place-content-center'><BackButton /></div>
      <div><PageHeader word={'ריכוז הכנסות'} /></div>
      <div className='place-content-center text-white'>leeft</div>
      </div>
      <div className='container mx-auto bg-white h-96' >
        <div className='flex justify-around'>
          <div>שכר</div>
          <div>פנסיה</div>
          <div>ביטוח לאומי</div>
          <div>שכר דירה</div>
        </div>
      </div>
    </>
    
  )
}
