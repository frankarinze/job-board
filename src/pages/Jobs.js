import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../components/searchbar/SearchBar"
import { JobFilter } from "../components/filter/JobFilter"
import { Card } from "../components/cards/Card"
import { Board } from "../components/job-board/Board"

const Jobs = (props) => {

  return (
    <div className="m-8 flex-column ">
      <SearchBar />
      <div className="md:flex relative ">
        <JobFilter />
        <JobFilter />
        <JobFilter />
      </div>
      <div className="flex flex-row">
        <div className="job-list-wrapper ">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

         
         

        </div>
        <div className="flex h-full flex-col job-board-wrapper">
         <Board/>
        </div>


      </div>

    </div>
  );
}

export default Jobs;