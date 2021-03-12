import React, { Children, useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./board.css";
import { Button } from '../buttons/Button'

// id:0,
//         company: "ECi Software Solutions",
//         datePosted: "2020-11-11",
//         country: "Canada",
//         city: 'Ontario',
//         iLike: true,
//         aboutCompany: 'For more than 30 years, ECI Software Solutions has been providing industry-specific, cloud-based business management software and services to small and medium-sized businesses. With divisions focused on manufacturing, wholesale/retail distribution, building and construction, and field service, ECIs solutions integrate into every aspect of a customers business to help them level the playing field, run day-to-day operations more efficiently, and free them up to focus on what matters most. It’s how business gets done.',
//         jobDescription: 'To apply for this position, please attach a detailed resume that demonstrates your qualifications and skill set pertaining to this position. Applications without a resume will not be considered. ECI Lasso is seeking a Frontend Developer to continue to provide the best in Software Solutions to small and medium-sized businesses ECI Lasso is the developer of the leading cloud-based, on-demand Customer Relationship Management (CRM) software for the new-home-building industry. We have experienced consistent growth during the last decade and our user base asks a lot of our system. Scale, reliability, and innovation keep us learning on a daily basis. You will join our front-end team to enhance and maintain our user interfaces. We have distributed systems hosted in AWS, which are presented to our users through an Angular/React frontend.',
//         jobTitle: 'Frontend developer',
//         responsibility: 'You thrive in a self-directed and open work environment. There’s no boss breathing down your neck, no deadlines, no fixed work hours and no in-office requirements. It’s really important you can manage your time well, and know what you need in order to do your job well (e.g. what work hours to pick so you have enough time to communicate with team members effectively) The ability to balance of maintainable code with delivering value regularly to our customers You can communicate the trade-offs of doing something quickly and doing something well Experience building complex interfaces with state management',
//         marketType: 'Technology Occupations',
//         employmentType: 'Full time',
//         skills

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
                        <FeatherIcon className="feather-active" icon="heart" size="24" />
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
