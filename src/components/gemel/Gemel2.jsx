import { useEffect, useState, useContext } from 'react'
import {AppContext} from '../config/DataContext'
import { PageHeader } from '../sheard/PageHeader'
import { BackButton } from '../sheard/BackButton'
import axios from 'axios';
export const Gemel2 = () => {
const { setGemelData,gemelData } = useContext(AppContext)
  const resource_id = [
    {
    year: 2024,
    url: 'a30dcbea-a1d2-482c-ae29-8f781f5025fb'},
     {
    year: 2023,
    url: '2016d770-f094-4a2e-983e-797c26479720'},
     {
    year: '1999-2022',
    url: '91c849ed-ddc4-472b-bd09-0f5486cea35c'},  
  ]

  useEffect(() => {
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
  setGemelData(response.data.result)
  console.log(gemelData)
})
.catch(function(err) {
  console.error('Error:', err);
});
}   
    , [])
  useEffect(() => {
    console.log(gemelData)
    try { 
      gemelData.records.map((rec) => {
        if (rec.FUND_ID === 9916) {
          console.log(rec)
        }
      })
    //  const foundId = gemelData.records.filter(rec //=> rec.FUND_ID === 9916)
   //   console.log(foundId)
    }
    catch (err) {
      console.log(err)
    }
  },[gemelData])

  return (
    <>
      <div className='flex justify-around mt-4'>
          <BackButton className='place-content-center' />
          <PageHeader className='place-content-center' word={` קופות  גמל `} />
        </div>
    </>
  )
}
