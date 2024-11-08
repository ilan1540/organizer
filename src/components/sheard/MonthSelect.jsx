import { useState } from 'react';

//import { Select } from '@headlessui/react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

//import { getMonth, getYear } from 'date-fns';
//import range from "lodash/range";

// רישמת חודשים לא בשימוש
/*
 const month = [
  {no: 'jan',
  teor: 'ינואר'},
  {no: 'feb',
  teor: 'פברואר'},
  {no: 'mar',
  teor: 'מרץ'},
  {no: 'apr',
  teor: 'אפריל'},
  {no: 'may',
  teor: 'מאי'},
  {no: 'jun',
  teor: 'יוני'},
  {no: 'juk',
  teor: 'יולי'},
  {no: 'aug',
  teor: 'אוגוסט'},
  {no: 'sep',
  teor: 'ספטמבר'},
  {no: 'oct',
  teor: 'אוקטובר'},
  {no: 'nov',
  teor: 'נובמבר'},
  {no: 'dec',
  teor: 'דצמבר'},
]
 */    

export const MonthSelect = ({set}) => {
  const [monthYearSelect,setMonthYearSelect] = useState(new Date())

  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };

  return (
    <DatePicker className="border-indigo-500 focus: borber-indigo-900"
      selected={monthYearSelect}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat="MM/yyyy"
      onChange={(date) => {
        setMonthYearSelect(date)
        set(date)
      }}
    />
  )
}



/*
onChange={(e)=>setCardState({...cardState ,month: e.target.value})}
*/


/*
<div className='text-right p-4' >
      <label for="monthSelect" className="block text-sm p-1  font-bold text-gray-700">בחר חודש</label>
      
      <Select name="status" aria-label="Project status">
        {month.map((m) => <option key={m.no} value={m.teor}
      >{m.teor}</option>)}
      
    </Select>
      </div>
 
*/