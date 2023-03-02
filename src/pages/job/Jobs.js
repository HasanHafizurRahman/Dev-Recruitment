import React from "react";
import JobCard from "../../component/JobCard";

const Jobs = () => {
  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-1 mx-auto mt-5 lg:w-3/4">
        <JobCard />
      </div>
    </div>
  );
};

export default Jobs;
