import React from 'react'
import { Link, useNavigate} from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
 
  
    return (
      <button className="rounded-full py-1 px-5 text-lg font-semibold  text-white bg-gray-600 cursor-pointer hover:bg-indigo-400 hover:text-white"
        onClick={() => navigate(-1)}>
        חזור
        </button>
    );
}
