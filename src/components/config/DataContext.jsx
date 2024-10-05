import { createContext,useState } from "react";


export const AppContext = createContext(null)



export const DataContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  const [user, setUser] = useState('ilan')
  const [result, setResult] = useState([])
  const [csvFile, setCsvFile] = useState()
  const [firebaseMasg, setFirebaseMass] = useState()
  const [year, setYear] = useState()
  const [month, setMonth] = useState('jan')
  const [sogIncome, setSogIncome] = useState()
  const [cardState, setCardState] = useState({})
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState([])
  
  

   const value = {
    isAuth,
    setIsAuth,
    user,
    setUser,
    result,
     setResult,
     csvFile,
     setCsvFile,
     firebaseMasg,
     setFirebaseMass,
     year,
     setYear,
     month,
     setMonth,
     sogIncome,
     setSogIncome,
     search,
     setSearch,
     cardState,
     setCardState,
     options,
     setOptions ,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};


