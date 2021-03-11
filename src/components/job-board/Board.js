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

                        <h3>About Code Academy</h3>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                    </div>

                    <div className="board-description-job">
                        <h3>Job description</h3>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p><p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p> <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p> <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p> <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                        <p>Hello job board</p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
