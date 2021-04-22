import React  from 'react'
import FeatherIcon from 'feather-icons-react';
import "./board.css";
import { Button } from '../buttons/Button'



export const Board = ({ id, JobTitle, company, datePosted, country, city, iLike, aboutCompany, jobDescription,
    responsibility, marketType, employmentType, skills, visible, props }) => {
    return (
        <React.Fragment>
            <div id={id} className="board-wrapper">

                <div className="board-header border-b ">
                    <div className="board-top-header">
                        <div className="">
                            <h3 className="board-header-title">
                                {JobTitle}
                            </h3>
                            <div className="flex flex-row ">

                                <p className="board-company">{company}</p>
                                <p className="board-location"><div className="location-dot"></div>{city}{country}</p>
                            </div>
                        </div>
                        <FeatherIcon className={`${iLike === 'like' ? 'feather-active' : 'feather-inactive'}`} icon="heart" size="24" />
                    </div>
                    <div className="board-top-header">

                        <p className="board-date-posted">Posted : {datePosted}</p>
                        <Button
                        onClick={() => console.log("click works yay yay haha haha")}
                            label="Apply Now"
                        />
                    </div>

                </div>
                <div className={`${visible}`}>
                    <div className="board-description-about">

                        <h3 className="about-company-title">About {company}</h3>
                        <p className="job-content">
                            {aboutCompany}
                        </p>
                    </div> 

                     <div className="board-description-job">
                        <h3 className="job-description-title">Job Description</h3>
                        <p className="job-content">
                            {jobDescription}
                        </p>

                        <h3 className="job-description-title">Responsibilities</h3>
                        <p className="job-content">
                            {responsibility}
                        </p>
                    </div>
                </div>

               

            </div>
        </React.Fragment>
    );
}
