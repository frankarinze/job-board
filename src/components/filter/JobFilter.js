import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./jobfilter.css";


export const JobFilter = (props) => {

    const [state, setState] = useState({
        isOpen: false,
        selectValue: 'Date posted',
    })

    const toggleNav = () => setState({ ...state, isOpen: true });
    const close = () => setState({ ...state, isOpen: true });
    const items = [
        {
            id: 0,
            text: 'Film  Animation'
        },
        {
            id: 1,
            text: '1 week ago'
        },
        {
            id: 2,
            text: 'Science Technology'
        }
    ];

    return (
        <React.Fragment>
            <div>
                <div class="select-box mr-4 flex ">
                    <div className={!state.isOpen ?
                        "options-container shadow-xl " :
                        "options-container shadow-xl  active"}>
                        {items.map((item) => (
                            <div
                                className="option"

                                id={item.id}
                                onClick={() => {
                                    setState({ ...state, selectValue: item.text, isOpen: !state.isOpen });
                                }}>
                                <input type="radio" class="radio" id={`xx${item.id}`} name="category" />
                                <label for="film">{item.text}</label>
                            </div>
                        ))}
                    </div>

                    <div className="selected lg:w-64 sm:w-full md:w-52 shadow-sm border border-gray-200 h-12 rounded my-3 " onClick={toggleNav}>
                        {state.selectValue}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
