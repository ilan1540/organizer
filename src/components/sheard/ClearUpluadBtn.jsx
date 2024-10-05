import { useContext } from 'react'
import { AppContext } from '../config/DataContext'


export const ClearUpluadBtn = () => {
  const { setCsvFile, setCardState, cardState } = useContext(AppContext)
  
  const clearAll = () => {
      setCsvFile(null)
    setCardState({ cardState: null })
    location.reload()

  }

  return (
    <div className='bg-blue-600 text-white hover:bg-blue-900  py-2 px-4 rounded-full'>
      <i className="fa-solid fa-trash-can fa-4x text-white  text-xl  "
        onClick={clearAll}
      >
        <label className='cursor-pointer mr-1' >מחק קובץ</label>
      </i>
    </div>
  )
}
