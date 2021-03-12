import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./card.css";
import { jobsData } from '../../jobsData';


export const Card = (props) => {
    const MAX_LENGTH = 180;
    return (
        <React.Fragment>
            <>
                {
                    jobsData.map((data, id) => (
                        <div className="card-wrapper ">
                            <div id={id} className="card-header">
                                <div className="flex flex-col">
                                    <h3 className="card-title">{data.jobTitle}</h3>
                                    <p className="card-company">{data.company}</p>
                                    <p className="card-location">{data.country}, {data.city}</p>
                                </div>
                                <FeatherIcon className="feather-active" icon="heart" size="24" />
                            </div>
                            <div className="card-body ">
                            <div className="green-dot"></div>
                            <p className="card-description">{`${data.jobDescription.substring(0, MAX_LENGTH)}...`}</p>
                        </div>
                        </div>
                        ))
                }
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