import { useEffect,useContext } from 'react'
import { getData } from '../config/firebaseFunc'
import { AppContext } from '../config/DataContext'


export const SogIncomeSelect = () => {
  const { options, setOptions } = useContext(AppContext)
  
// read from firebase
  useEffect(() => {
    const colName = 'options'
  //  const docName = 'incomeName'
    getData(colName, setOptions)
    
  }, [])
console.log(options)
//const {incomeName} =options
  return (
    <>
      {options?.incomeName ? (
        <>
            <select onChange={console.log('item')} >
              {options && options.incomeName.map((item) =>
              <option >
                {item}
              </option>)}
          </select>
      </>) : (null)}
    
  
    </>
    
)}
