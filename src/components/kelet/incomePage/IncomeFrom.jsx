import { useForm } from "react-hook-form";
import { useState } from "react";
import { PageHeader } from "../../sheard/PageHeader";
import { MonthSelect } from "../../sheard/MonthSelect";
import { BackButton } from "../../sheard/BackButton";
import {SelectMakor } from "../../sheard/SelectMakor";
import { addNewDoc } from "../../config/firebaseFunc";
import { useNavigate } from "react-router-dom";

export const IncomeFrom = () => {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm();
  const [makor, setMakor] = useState()
  const [date, setDate] = useState()
  
  const navigate = useNavigate();
 
  
  const onSubmit = data => {
  //  const newRec = { ...data, makor, date }
    const colName = 'salary'
  //  addNewDoc(colName, data)
    console.log(data)
    navigate('/incomes')
 
  };

  const inputField = [
    {
      no: 1,
      leble: 'שכר ברוטו',
      type: 'number',
      fieldName: 'broto',
      placeHolder: ' סך שכר',
    },
    {
      no: 2,
      leble: 'מס הכנסה',
      type: 'number',
      fieldName: 'tax',
      placeHolder: 'מס הכנסה',
    },
    {
      no: 3,
      leble: 'ביטוח לאומי',
      type: 'number',
      fieldName: 'bl',
      placeHolder: 'ביטוח לאומי',
    },
    {
      no: 4,
      leble: 'מס בריאות',
      type: 'number',
      fieldName: 'br',
      placeHolder: 'מס בריאות',
    },
    {
      no: 5,
      leble: 'גמל עובד',
      type: 'number',
      fieldName: 'Egemel',
      placeHolder: 'גמל עובד',
    },
    {
      no: 6,
      leble: 'קרן השתלמות עובד',
      type: 'number',
      fieldName: 'EHistalmot',
      placeHolder: ' קרןהשתלמות',
    },
    {
      no: 7,
      leble: 'פיצויים מעביד',
      type: 'number',
      fieldName: 'pizuim',
      placeHolder: 'פיצויים מעביד',
    },
  {
    no: 8,
      leble: ' גמל מעביד',
      type: 'number',
      fieldName: 'mGemel',
      placeHolder: 'פיצויים מעביד',
    },
  {
  no: 9,
      leble: 'קרן השתלמות מעביד',
      type: 'number',
      fieldName: 'mHistalmot',
      placeHolder: 'קרן השתלמות מעביד',
    },
  {
  no: 10,
      leble: 'ביטוח לאומי מעביד',
      type: 'number',
      fieldName: 'mBl',
      placeHolder: 'ביטוח לאומי מעביד',
    },
    
  ]


  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="bg-white h-72  border-emerald-950 rounded-lg"
    >  
      <div className="flex">
        <div className="justify-start content-center">
            <BackButton />
        </div>
        <div className="justify-center flex-auto">
            <PageHeader word='קלט משכורת' />
        </div>
  
      
      </div>
     
      <div className="grid grid-row-4 grid-cols-6 gap-2 m-4">
        <div className="font-bold text-base italic">
          <label className="m-4 underline">מקור הכנסה</label>
          <SelectMakor  setMakor={setMakor} {...register(makor)} />
        </div>
        <div className="font-bold text-base italic">
          <label className="m-4 underline">תקופה</label>
          <MonthSelect set={setDate}  />
        </div>
        {inputField.map((f)=><div key={f.no} className="font-bold text-base italic">
          <label className="m-4 underline">{f.leble} </label>
          <input type={f.type} className="border-indigo-500 " placeholder={f.placeHolder}
          {...register(f.fieldName)}
          />
        </div>
          
        )}
        
      </div>
      <div className='flex justify-center flex-row  '>
        <button className="rounded-full py-1 px-4 text-md font-semibold  text-white bg-blue-600 cursor-pointer hover:bg-blue-800 hover:font-bold " onClick={onSubmit} >
  שמור
      </button>
      </div>      
    </form>
  )
}

