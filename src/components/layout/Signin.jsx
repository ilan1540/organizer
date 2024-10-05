
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../config/AuthContext';
//import { Disclosure } from '@headlessui/react'



export const Signin = () => {
  const { googleSignIn, user } = UserAuth();


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

   

  return (
    <div className='container mx-auto flex text-5xl  items-center justify-center text-blue-600 '>
      <div className='text-center '>
        <h1 className='mb-5 underline'>מערכת לניהול נכסים </h1>
        <div className='flex items-center justify-center mt-10 '>
          <GoogleButton onClick={handleGoogleSignIn}   />
        </div>
        
     </div>
         
    </div>
  )
}
