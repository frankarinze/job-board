import React from 'react'
import FeatherIcon from 'feather-icons-react';
import "./card.css";

export const Card = ({id ,iLike, onClick, jobTitle , company , country , city, jobDescription , props}) => {
    return (
        <React.Fragment>
            <> 
                        <div onClick={onClick} className="card-wrapper ">
                            <div  className="card-header">
                                <div className="flex flex-col">
                                    <h3 className="card-title">{jobTitle}</h3>
                                    <p className="card-company">{company}</p>
                                    <p className="card-location">{country} {city}</p>
                                </div>
                                <FeatherIcon className={`${iLike === 'like' ? 'feather-active' : 'feather-inactive'}`} icon="heart" size="24" />
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