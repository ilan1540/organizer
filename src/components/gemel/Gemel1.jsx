import {useEffect,useState} from 'react'
import { PageHeader } from '../sheard/PageHeader'
import { BackButton } from '../sheard/BackButton'
import { Link } from 'react-router-dom'
import { Fields } from './Fields';
import axios from 'axios';
import { readData } from '../config/firebaseFunc';

export const Gemel1 = () => {
  const [data, setData] = useState([])
  const [gemelUrl, setGemelUrl] = useState()

  let Links =[
      { name: "טיפול בשדות", to: "/fields" },
      {name:"קופות גמל",to:"/gemel"},
      {name:"INCOMES",to:"/showincomes"},
      {name:"sog Income",to:"/sogincome"},
      {name:"Upload",to:"/upload"},
      { name: "קלט נתונים", to: "/incomes" },
      {name:"כרטיסי אשראי",to:"/showcreditcard"},
  ]; 
  useEffect(() => {
    readData('options',setGemelUrl)
    const data = {
  resource_id: 'a30dcbea-a1d2-482c-ae29-8f781f5025fb',
  //limit:500,
    }
axios({
  method: 'get',
  url: 'https://data.gov.il/api/3/action/datastore_search',
  params: data
})
.then(function(response) {
  setData(response.data.result)
})
.catch(function(err) {
  console.error('Error:', err);
});
}   
    , [])
  useEffect(() => {
    console.log(data.records)
    try { 
      const foundId = data.records.filter(rec => rec.FUND_ID === 9916)
      console.log(foundId)
    }
    catch (err) {
      console.log(err)
    }
  },[data])
  


  return (
    <>
     
      <div>
    <div className='flex justify-around mt-4'>
          <BackButton className='place-content-center' />
          <PageHeader className='place-content-center' word={` קופות  גמל `} />
        </div>
        <div>
          <ul className="hiddden xl:flex items-center gap-12 font-semibold text-base">
        {Links.map((item, i) => <li className="cursor-pointer p-3 hover:text-white hover:bg-sky-400 rounded-md transition-all" key={i}>
          <Link to={item.to} >{item.name}</Link>
        </li>)}
      </ul>
        </div>
      </div>
      
    </>
    
  )
}
