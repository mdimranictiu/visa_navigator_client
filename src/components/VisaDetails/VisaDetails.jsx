import React from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const VisaDetails = () => {
  document.title="Visa Details";
  const { user } = useContext(AuthContext);
  const visa = useLoaderData();

  const {
    countryName,
    countryImgUrl,
    visaType,
    validity,
    Fee,
    application_method,
    _id,
    Age_restriction,
    Processing_time,
    Required_documents,
    description,
  } = visa;
  const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  const [error, setError] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(null);

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleApplyVisaButton = () => {
    document.getElementById("apply_modal").showModal();
  };
  const hanldeApplyVisaSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const applyDate = form.appliedDate.value;
    const visa_fee = form.Fee.value;

    const newApply = {
      countryName,
      countryImgUrl,
      visaType,
      validity,
      email,
      fname,
      lname,
      applyDate,
      visa_fee,
      application_method,
      Processing_time,
    };
    console.log(newApply);
    form.reset();
    fetch("https://visa-navigator-server-nine.vercel.app/addapplication", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApply),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          document.getElementById("apply_modal").close();
          Swal.fire({
            title: "Success",
            text: "Application Done",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {});
        }
      });
  };
  return (
    <>
      <div className="my-16">
        <div className="flex text-xl flex-col items-center p-10 w-4/5 border border-gray-300 mx-auto">
          <div className="w-4/5 my-5 mx-auto flex justify-center">
            <img
              src={countryImgUrl}
              alt="Img Not Found"
              className="object-contain w-[320px] h-[180px]"
            />
          </div>
          <div>
            <h2 className="text-lg">
              <span className="font-semibold">Country Name: </span>
              {countryName}
            </h2>
            <p>
              <span className="font-bold">Visa Type:</span>
              {visaType}
            </p>
            <p>
              <span className="font-semibold">Validity: </span>
              {validity}
            </p>
            <p>
              <span className="font-semibold">Fee: </span>
              {Fee}
            </p>
            <p>
              <span className="font-semibold">Application Method: </span>
              {application_method}
            </p>
            <p>
              <span className="font-semibold">Processing Time: </span>
              {Processing_time}
            </p>
            <p>
              <span className="font-semibold">Age Restriction: </span>
              {Age_restriction}
            </p>
            <p>
              <span className="font-semibold">Required Documents: </span>
              <ul className="list-disc ml-5">
                {Required_documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </p>
            <p>
              <span className="font-semibold">Descriptions: </span>
              {description}
            </p>
          </div>
          <input
            onClick={handleApplyVisaButton}
            type="submit"
            value="Apply for the Visa"
            className="input input-bordered w-[220px] h-[50px] mx-auto my-8 font-semibold text-lg rounded-md text-white bg-[#72214a] hover:bg-white hover:text-[#72214a] border border-[#72214a] duration-300 cursor-pointer shadow-md max-sm:w-full max-sm:h-[50px]"
          />
        </div>
      </div>
      <dialog id="apply_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className=" absolute right-2 text-2xl top-2 p-3">
              <IoMdClose />
            </button>
          </form>
          <div className="my-10">
            <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
              Apply for the visa
            </h2>
            <form
              onSubmit={hanldeApplyVisaSubmit}
              className=" p-5 w-4/5 border border-gray-300 mx-auto"
            >
              <div className="grid p-10  grid-cols-2  gap-5 max-md:grid-cols-1 max-md:w-full max-sm:w-full max-sm:grid-cols-1 mx-auto w-4/5">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Email
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Email"
                      defaultValue={user.email}
                      name="email"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      First Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Last Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Applied Date
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="date"
                      placeholder="DD/MM/YYYY"
                      name="appliedDate"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Fee
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Visa Fee"
                      name="Fee"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control my-16 ">
                <label className="input-group">
                  <input
                    type="submit"
                    value="Apply"
                    className="input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default VisaDetails;
