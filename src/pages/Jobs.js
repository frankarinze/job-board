import React, { useState } from 'react';
import SearchBar from "../components/searchbar/SearchBar";
import { JobFilter } from "../components/filter/JobFilter";
import { Card } from "../components/cards/Card";
import { Board } from "../components/job-board/Board";
import { jobsData } from '../jobsData';

const dateItems = [
  {
    id: 0,
    text: 'today'
  },
  {
    id: 1,
    text: '1 week ago'
  },
  {
    id: 2,
    text: '1 month ago'
  }
];


const locationItem = [
  {
    id: 0,
    text: 'london'
  },
  {
    id: 1,
    text: 'france'
  },
  {
    id: 2,
    text: 'canada'
  },
  {
    id: 3,
    text: 'united states'
  }
];

const skillsItem = [
  {
    id: 0,
    text: 'html'
  },
  {
    id: 1,
    text: 'css'
  },
  {
    id: 2,
    text: 'reactjs'
  }
];

const jobTypeItem = [
  {
    id: 0,
    text: 'full time'
  },
  {
    id: 1,
    text: 'part time'
  }
];


const Jobs = (props) => {
  const MAX_LENGTH = 180;

  const [state, setState] = useState({
    data: jobsData,
    selectedId: -1,
  })
  const [filteredSearch, setFilteredSearch] = useState('');

  function handleClick(id) {
    console.log("see", id);
    setState({
      ...state, selectedId: id
    })
    // console.log(days)
  }

  // function searchEvent() {

  // }
  const handleChange = event => {
    try {
      setFilteredSearch(event.target.value)
      console.log(event.target.value)
    }
    catch (e) {
      console.log(e)
    }

  }

  const searchFn = (param1, param2) => {
    let newData = jobsData.filter(name =>
      name[param1].toLowerCase().includes(param2))
    setState({
      data: newData
    })

  }
  const dynamicSearch = () => {
    let newData = jobsData.filter(name =>
      name.jobTitle.toLowerCase().includes(filteredSearch.toLowerCase())
      || name.company.toLowerCase().includes(filteredSearch.toLowerCase())
      // || name.jobDescription.toLowerCase().includes(filteredSearch.toLowerCase())
      // || name.country.toLowerCase().includes(filteredSearch.toLowerCase())
    )
    console.log({ filteredSearch, newData })
    setState({
      data: newData
    })
  }

  return (

    <div className="m-8 flex-column ">
      <SearchBar
        value={filteredSearch || ""} onChange={handleChange} onClick={dynamicSearch}
      />
      <div className="md:flex relative ">
        <JobFilter
          filterName="Date Posted"
          name={"datePosted"}
          item={dateItems}
          handleDropDownChange={searchFn}
        />
        <JobFilter
          filterName="Location"
          name={'country'}
          item={locationItem}
          handleDropDownChange={searchFn}
        />

        <JobFilter
          filterName="Skills"
          name={"skills"}
          item={skillsItem}
          handleDropDownChange={searchFn}
        />
        <JobFilter
          filterName="Job Type"
          name={'employmentType'}
          item={jobTypeItem}
          handleDropDownChange={searchFn}
        />
      </div>
      <div className="flex flex-row">
        <div className="job-list-wrapper ">

          {
            state.data.map((data) => (
              <Card
                onClick={() => handleClick(data.id)}
                key={data.id}
                iLike={data.iLike}
                // data.jobTitle
                jobTitle={data.jobTitle}
                company={data.company}
                country={data.country}
                city={data.city}
                jobDescription={`${data.jobDescription.substring(0, MAX_LENGTH)}...`}
              />
            ))
            // <div>{dynamicSearch()}</div>
          }
        </div>
        {state.selectedId >= 0 ? (
          <div className="flex h-full flex-col job-board-wrapper">
            {
              jobsData.map((data) => {
                
                if (data.id === state.selectedId) {
                  return (
                    <Board
                      iLike={data.iLike}
                      JobTitle={data.jobTitle}
                      visible="board-body"
                      company={data.company}
                      datePosted={data.datePosted}
                      country={data.country}
                      city={data.city}
                      aboutCompany={data.aboutCompany}
                      jobDescription={data.jobDescription}
                      responsibility={data.responsibility}
                    />
                  )
                }
                return null;
              }
              
              )
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