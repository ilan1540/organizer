import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";



export const QuarterYear = () => {
const [quarter , setQuater] = useState(new Date())
   const renderQuarterContent = (quarter, shortQuarter) => {
    const tooltipText = `Tooltip for quarter: ${quarter}`;
    return <span title={tooltipText}>{shortQuarter}</span>;
  };
  return (
   <DatePicker
      selected={quarter}
      renderQuarterContent={renderQuarterContent}
      showQuarterYearPicker
      dateFormat="QQQ, yyyy"
      onChange={(date) => setQuater(date)}
    />
  )
}
