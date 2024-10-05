import {useState} from 'react'

export const Filter = ({set, stateFilter }) => {
  const selectOption = [
  { name: 'בחר סוג נתון',
     value: '1'
    },
    { name: 'מספר כרטיס',
     value: 'cardNo'
    },
    { name: 'תאריך חיוב',
     value: 'billingDate'
    },
    { name: 'שם בית עסק',
     value: 'storeName'
    },
  
  ]
  
  
  
  return (
    <div className='mt-5 w-2/4 m-auto'>
     <select
        className="mr-5 h-full rounded-md border-0  py-2 pl-2 pr-7 text-gray-500 "
        onChange={(e)=> set({...stateFilter, name:e.target.value})}
          >
            {selectOption.map((item) => <option className='text-black-900 bg-green-300' key={item.value} value={item.value}>{item.name}
          </option>)}
      </select>
      <input className='mr-5  rounded-md border-0 py-1.5   text-gray-900 ring-1 ring-inset ring-gray-300'  
      onChange={(e)=>set({...stateFilter, value:e.target.value})}
      />
    </div>
  )
}


  

