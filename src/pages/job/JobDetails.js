import React from "react";

import meeting from "../../assests/meeting.jpg";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useJobByIdQuery } from "../../features/job/jobApi";
const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useJobByIdQuery(id);
  const { position } = data?.data || {};

  return (
    <div className="pt-14 grid grid-cols-12 gap-5">
      <h1>this is job details page.</h1>
      <p>{position}</p>
    </div>
  );
};

export default JobDetails;
