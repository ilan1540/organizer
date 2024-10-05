import { useContext,useState } from 'react';
import { AppContext } from '../config/DataContext'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";



// const year = [
 //  2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030
//]
     

export const YaerSelect = () => {
  const [startDate, setStartDate] = useState(new Date());
    const years = range(1990, getYear(new Date()) + 1, 1);
  
  return (
    <DatePicker 
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            

            
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
  )
}


/*
const {cardState,setCardState} = useContext(AppContext)
  return (
    <div className='bg-blue-600  hover:bg-blue-900  p-2  rounded-full w-50 ' >
      <select className='text-black mr-1 mt-1 bg-white cursor-pointer '
       onChange={(e)=>setCardState({...cardState , year:e.target.value})}
      >
        <option>בחר שנה</option>
        {year.map((m) => <option key={m} value={m}
      >{m}</option>)}
      </select>
       
      </div>
 
  )
*/

/*
<select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
*/

/*
<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
*/