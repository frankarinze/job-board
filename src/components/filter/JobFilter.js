import React, { useState } from 'react'
import "./jobfilter.css";


export const JobFilter = (props) => {

    const [state, setState] = useState({
        isOpen: false,
        selectValue: props.filterName,
    })

    const toggleNav = () => setState({ ...state, isOpen: true });
  

    return (
        <React.Fragment>
            <div>
                <div class="select-box mr-4 flex ">
                    <div className={!state.isOpen ?
                        "options-container shadow-xl " :
                        "options-container shadow-xl  active"}>
                        {props.item.map((item) => (
                            <div
                                className="option"

                                id={item.id}
                                onClick={() => {
                                    setState({ ...state, selectValue: item.text, isOpen: !state.isOpen });
                                    props.handleDropDownChange(props.name, item.text)
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
