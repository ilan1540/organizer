import React from 'react'
import { Link, useNavigate} from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
 
  
    return (
      <button className="rounded-full py-1 px-4 text-md font-semibold  text-white bg-blue-600 cursor-pointer hover:bg-blue-800 hover:font-bold"
        onClick={() => navigate(-1)}>
        חזור
        </button>
    );
}
