import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const JobCard = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();

  return (
    <div>
      {data?.data?.map(
        ({
          position,
          companyName,
          location,
          employmentType,
          experience,
          _id,
        }) => (
          <div
            key={_id}
            className="border border-gray-300 shadow-xl p-5 rounded-2xl my-5"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-xl">{position}</p>
                <small>
                  by{" "}
                  <span className="font-semibold hover: cursor-pointer hover:underline transition-all">
                    {companyName}
                  </span>
                </small>
              </div>
              <p>{location}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="">{employmentType}</p>
              <button
                className="btn"
                onClick={() => navigate(`/job-details/${_id}`)}
              >
                Details
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default JobCard;
