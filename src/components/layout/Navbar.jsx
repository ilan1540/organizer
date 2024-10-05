import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { UserAuth } from "../config/AuthContext";
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'




export const Navbar = () => {
//  const [open, setOpen] = useState(false);
    const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user) {
    navigate('/')
  } else {
    navigate('/signin')
  }

  },[user])

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const navigation = {
    ctegory: [
      { name: 'קלט אשראי', to: '/keletcreadite'},
      { name: 'הצגת אשראי', to: '/creaditeShow' },
      { name: 'נכסים', to: '/estates' },
      { name: 'grid', to: '/grid' },
      { name: 'home', to: '/' },
  ],
  pages: [
    { name: 'קבצים', href: '#' },
    { name: 'שכר', href: '#' },
  ],
  }
  
  let Links =[
      {name:"HOME",to:"/home"},
      {name:"SERVICE",to:"/service"},
      {name:"sog Income",to:"/sogincome"},
      {name:"Upload",to:"/upload"},
      {name:"קלט נתונים",to:"/incomes"},
    ]; 
  const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}


  return (
    <header className="flex justify-between items-center text-black py-4 px-8 md:px16 bg-white drop-shadow-2xl font-bold">
      <Disclosure className='font-semibold text-base'>
        {user?.displayName ? (
                      <Link className='cursor-pointer p-3 hover:text-white hover:bg-sky-400 rounded-md '            
                        as="a"
                        onClick={handleSignOut}
                      >יציאה</Link>
                      ): (
                           <Link className='cursor-pointer p-3 hover:text-white hover:bg-sky-400 rounded-md '            
                        as="a"
                        to={`/signin`}
                      >כניסה</Link>
                      )}
      </Disclosure>
      {user?.displayName ? (
      <ul className="hiddden xl:flex items-center gap-12 font-semibold text-base">
        {Links.map((item, i) => <li className="cursor-pointer p-3 hover:text-white hover:bg-sky-400 rounded-md transition-all" key={i}>
          <Link to={item.to} >{item.name}</Link>
        </li>)}
      </ul>
      ):( null )}
      

      <Link to='/'>LOGO</Link>  
     </header>
  )

}
