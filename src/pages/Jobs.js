import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../components/searchbar/SearchBar"
import { JobFilter } from "../components/filter/JobFilter"
import { Card } from "../components/cards/Card"
import { Board } from "../components/job-board/Board"
import { jobsData } from '../jobsData'




const Jobs = (props) => {
  const MAX_LENGTH = 180;

  const [state, setState] = useState({
    data: [],
    selectedId: -1
  })
  function handleClick(id) {
    console.log("see", id);
    setState({
      ...state, selectedId: id
    })
  }

  useEffect(() => {
    setState({
      data: jobsData
    })
  }, []);

  return (
    <div className="m-8 flex-column ">
      {console.log(state.data)}
      {/* {console.log(state.selectedId)} */}
      <SearchBar />
      <div className="md:flex relative ">
        <JobFilter />
        <JobFilter />
        <JobFilter />
      </div>
      <div className="flex flex-row">
        <div className="job-list-wrapper ">

          {
            jobsData.map((data) => (
              <Card
                onClick={() => handleClick(data.id)}
                key={data.id}
                jobTitle={data.jobTitle}
                company={data.company}
                country={data.country}
                city={data.city}
                jobDescription={`${data.jobDescription.substring(0, MAX_LENGTH)}...`}
              />
            ))}
        </div>
        {state.selectedId >= 0 ? (
          <div className="flex h-full flex-col job-board-wrapper">
            {
              jobsData.map((data) => {

                if (data.id === state.selectedId) {
                  return (
                    <Board
                      JobTitle={data.jobTitle}
                      visible="board-body"
                      company={data.company}
                      datePosted={data.datePosted}
                      country ={data.country}
                      city ={data.city}
                      aboutCompany ={data.aboutCompany}
                      jobDescription ={data.jobDescription}
                      responsibility ={data.responsibility}


                    />
                  )
                }
              })
            }
          </div>
        ) : (
          <div className="flex h-full flex-col job-board-wrapper">
            <div className="board-wrapper">
              <div className="board-body-empty">
                <p className="p-4,text-base text-gray-500" >Select a Job to see details</p>
              </div>
            </div>
          </div>
        )



        }


      </div>

    </div>
  );
}

export default Jobs;