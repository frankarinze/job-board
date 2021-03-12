
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';


export const Button = ({onClick ,label}) => {


    return (
        <React.Fragment>

             <button 
             onClick={onClick}
             className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-500">
                {label}
            </button> 
        </React.Fragment>
    );
}


