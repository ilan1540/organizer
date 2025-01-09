import { useContext, useEffect, useState } from 'react'
import {AppContext} from '../config/DataContext'
import axios from 'axios'
import { upDate, readData } from '../config/firebaseFunc'
import { Table } from './Table'

export const Gemel = () => {
  const [data, setData] = useState([])
  const [header, setHeader] = useState([])
  const [fundId, setFundId] = useState(9916)
  const [limit, setLimit] = useState(10000)
  const [resId, setResId] = useState('91c849ed-ddc4-472b-bd09-0f5486cea35c')
  const [fDate,setFdate ] = useState('2024-11-14')
  const [uDate,setUdate ] = useState('2024-11-14')
  const [fields, setFields] = useState([])
  const [option,setOption] = useState()

  const { setGemelData } = useContext(AppContext)
  
  useEffect(() => {
    
  },[])
  useEffect(() => {
    if (data && data.data) {
 //     console.log(data && data.data.result.records)
      setData(data.data.result.records)
   //   console.log(data)
      setGemelData(data)
    }
    
  }, [option])

  useEffect(() => {
    if (option && option[0]) {
      setHeader(option[0].header)
  //     console.log(header)
    }
    
  },[data])
  
  
  const BASE_URL = `https://data.gov.il/api/3/action/datastore_search`
  
  const resource_id = 'a30dcbea-a1d2-482c-ae29-8f781f5025fb'
 // const Fund_ID = 9916
 // const limit = 10000
 // const fund_id = 9916
  
 const yearSelect = [
    {
    year: 2024,
    res: 'a30dcbea-a1d2-482c-ae29-8f781f5025fb'
    },
     {
    year: 2023,
    res: '2016d770-f094-4a2e-983e-797c26479720'
    },
     {
    year: '1999-2022',
    res: '91c849ed-ddc4-472b-bd09-0f5486cea35c',
    },
     
  ]
//console.log(resId)
 
  useEffect(() => {
    const fetchGemel = async () => {
      const response = await axios(`${BASE_URL}?resource_id=${resId}&limit=${limit}`).then(res => {
     //   console.log(res)
         setData(res)
      }) 
    }
    readData('options', setOption)
    fetchGemel()
  }, [resId])

  useEffect(() => {
   
   ////   setFields(data.data.result.fields)
    //  console.log(data.data.result.fields)

    
},[data])

  /*
  const getDate1 = () => {
    const data = {
  resource_id: '91c849ed-ddc4-472b-bd09-0f5486cea35c', // the resource id
  limit: 5, // get 5 results

    };

    async function getData() {
  try {
    // Making a GET request with Axios (the params object handles query string parameters)
    const response = await axios(`${BASE_URL}?resource_id=${resId}&limit=${limit}`).then(res => {
        console.log(res)
      }) 

    // Assuming the response contains 'result' with the 'total' count
    alert('Total results found: ' + response.data.result.total);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
   
    getData()
  }
*/
  return (
    <div className='bg-white  m-5 h-96' >
      <div className='flex justify-around ' >
      </div>
      <div>
        <select onChange={(e)=>setResId(e.target.value)}>
          {yearSelect.map((item) =>
          <option key={item.year} value={item.res}>{item.year}</option>)}
        </select>
      </div>
     <Table />
    </div>
  )
}


/*
 <button className='' onClick={() => readData('options', setOption)} >read</button>
      {data && option ? (<Table data={data.data.result.records} header={header} />):(null)}
*/