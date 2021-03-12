import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./card.css";
import {jobsData} from '../../jobsData';

export const Card = ({id , onClick, jobTitle , company , country , city, jobDescription , props}) => {
   
    return (
        <React.Fragment>
            <> 
                        <div 
                        onClick={onClick}
                        className="card-wrapper ">
                            <div  className="card-header">
                                <div className="flex flex-col">
                                    <h3 className="card-title">{jobTitle}</h3>
                                    <p className="card-company">{company}</p>
                                    <p className="card-location">{country} {city}</p>
                                </div>
                                <FeatherIcon className="feather-active" icon="heart" size="24" />
                            </div>
                            <div className="card-body ">
                                <div className="green-dot"></div>
                                <p className="card-description">{jobDescription}</p>
                            </div>
                        </div>
                 
            </>
        </React.Fragment>
    );



}

{/* <div className="stock-container">
{stockData.map((data, key) => {
  return (
    <div key={key}>
      <Stock
        key={key}
        company={data.company}
        ticker={data.ticker}
        stockPrice={data.stockPrice}
        timeElapsed={data.timeElapsed}
      />
    </div>
  );
})} */}