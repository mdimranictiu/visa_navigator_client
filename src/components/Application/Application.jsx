import React from "react";
import Swal from "sweetalert2";

const Application = ({ application, applications, setApplications }) => {
  const {
    countryName,
    countryImgUrl,
    visaType,
    validity,
    visa_fee,
    application_method,
    _id,
    Processing_time,
    applyDate,
    fname,
    lname,
    email,
  } = application;

  const handleCancelBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-server-nine.vercel.app/myapplication/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your application has been deleted.", "success");
              const remain = applications.filter((app) => app._id !== _id);
              setApplications(remain);
            } else {
              Swal.fire("Error!", "Failed to delete the application.", "error");
            }
          })
          .catch((error) => {
            console.error("Deletion Error:", error);
            Swal.fire("Error!", "An error occurred while deleting the application.", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-[25px]">
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src={countryImgUrl}
              alt="Not Found"
              className="rounded-xl w-[250px] h-[180px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Country Name : {countryName}</h2>
            <p>Visa Type : {visaType}</p>
            <p>Applicants Name: {`${fname} ${lname}`}</p>
            <p>Applicants Email: {email}</p>
            <p>Validity: {validity}</p>
            <p>Fee : {visa_fee}</p>
            <p>Processing time: {Processing_time}</p>
            <p>Application Method : {application_method}</p>
            <p>Application Date : {applyDate}</p>
            <div className="flex my-10 justify-between">
              <button
                onClick={() => handleCancelBtn(_id)}
                className="btn bg-[#72214a] w-full text-xl hover:text-[#72214a] text-white items-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
