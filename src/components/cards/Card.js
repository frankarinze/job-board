import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./card.css";


export const Card = (props) => {


    return (
        <React.Fragment>
            <div className="card-wrapper ">
                <div className="card-header">
                    <div className="flex flex-col">
                        <h3 className="card-title">Frontend developer</h3>
                        <p className ="card-company">Code Academy</p>
                        <p className="card-location">Paris , France</p>
                    </div>
                    <FeatherIcon className="feather-active" icon="heart" size="24"  />
                </div>
                <div className="card-body ">
                    <div className="green-dot"></div>
                    <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna….. more</p>
                </div>
            </div>
        </React.Fragment>
    );
}
