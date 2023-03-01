import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const JobCard = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();

  return (
    <div>
      {data?.data?.map(({ position, companyName, experience, _id }) => (
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Position: {position}</h2>
            <p>Company: {companyName}</p>
            <p>Experience: {experience}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => navigate(`/job-details/${_id}`)}
                className="btn btn-ghost"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
