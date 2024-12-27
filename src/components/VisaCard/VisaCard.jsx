import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VisaCard = ({ visas, setVisas, visa }) => {
  // const navigate=useNavigate()
  const {
    countryName,
    countryImgUrl,
    visaType,
    validity,
    Fee,
    application_method,
    Processing_time,
    _id,
  } = visa;
  // const viewDetails=(id)=>{
  //      navigate(`/Allvisas/${id}`)
  // }
  return (
    <div className=" border border-gray-300 rounded-[25px] ">
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
            src={countryImgUrl}
            alt="Not Found"
            className="rounded-xl w-[250px] h-[180px]"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Country Name : {countryName}</h2>
          <p>Visa Type : {visaType}</p>
          <p>Validity: {validity}</p>
          <p>Fee : {Fee}</p>
          <p>Processing_time : {Processing_time}</p>
          <p>Application Method : {application_method}</p>
          <div>
            <Link to={`/visaDetails/${_id}`}>
              <button className="btn bg-[#72214a] hover:text-[#72214a] text-white w-full items-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
