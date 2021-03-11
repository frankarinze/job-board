import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./board.css";
import { Button } from '../buttons/Button'

export const Board = (props) => {
    return (
        <React.Fragment>
            <div className="board-wrapper">

                <div className="board-header border-b ">
                    <div className="board-top-header">
                        <div className="">
                            <h3 className="board-header-title">
                                Frontend developer
                            </h3>
                            <div className="flex flex-row ">

                                <p className="board-company">Code Academy</p>
                                <p className="board-location"><div className="location-dot"></div>Paris, France</p>
                            </div>
                        </div>
                        <FeatherIcon className="feather-active" icon="heart" size="24" />
                    </div>
                    <div className="board-top-header">

                        <p className="board-date-posted">Posted {"Today"}</p>
                        <Button
                            label="Apply Now"
                        />
                    </div>

                </div>
                <div className="board-body">
                    <div className="board-description-about">

                        <h3 className="about-company-title">About Code Academy</h3>
                        <p className="job-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                    </div>

                    <div className="board-description-job">
                        <h3 className="job-description-title">Job Description</h3>
                        <p className="job-content">
                            Use markup languages like HTML to create user-friendly web pages

                            Maintain and improve website

                            Optimize applications for maximum speed

                            Design mobile-based features

                            Collaborate with back-end developers and web designers to improve usability

                            Get feedback from, and build solutions for, users and customers

                            Write functional requirement documents and guides

                            Create quality mockups and prototypes

                            Help back-end developers with coding and troubleshooting

                            Ensure high quality graphic standards and brand consistency

                            Stay up-to-date on emerging technologies
                        </p>

                        <h3 className="job-description-title">Responsibilities</h3>
                        <p className="job-content">
                            Proven work experience as a Front-end developer
                            Hands on experience with markup languages
                            Experience with JavaScript, CSS and jQuery
                            Familiarity with browser testing and debugging
                            In-depth understanding of the entire web development process (design, development and deployment)
                            Understanding of layout aesthetics
                            Knowledge of SEO principles
                            Familiarity with software like Adobe Suite, Photoshop and content management systems
                            An ability to perform well in a fast-paced environment
                            Excellent analytical and multitasking skills
                            BSc degree in Computer Science or relevant field
                        </p>


                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
