//import {useEffect,useContext} from 'react'
//import { IncomeFrom } from './IncomeFrom'
//import { AppContext } from '../../config/DataContext'
//import { getData ,readOptions } from '../../config/firebaseFunc'
import { Link  } from 'react-router-dom'
const categories = [
  {
    name: 'קלט הכנסות',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

const Links =[
      {incomeType :'pension' , name:"פנסיה",to:"/income/pension"},
      { incomeType: 'salary', name: "משכורת", to: "/income/salary" },
       { incomeType: 'nationalInsurance', name: "ביטוח לאומי", to: "/income/nationalInsurance" },
        {incomeType :'rent' , name:"שכר דירה",to:"/income/rent"},
      
    ]; 
export const Incomes = () => {
//  const {options, setOptions } = useContext(AppContext)
 
/*
  // read from firebase
  // collection Name = 'options'
  useEffect(() => {
    readOptions(setOptions)
    console.log(options.incomeName)
  }, [])
*/
  
  
 
  return (
    <>
    <div className="flex justify-center pt-10">
          <div className="flex gap-4">
          
            {Links  && Links.map(({ name,to }) => (
              <Link as='a' to={to}
                key={to}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-white hover:text-black  "
              >
                {name}
              </Link>
            ))}
            
          </div>      
      </div>
      <div className="m-5">
           
          </div>
      </>
  )
}
