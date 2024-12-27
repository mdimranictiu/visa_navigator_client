import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2'

const VisaAdded = ({ visas, setVisas, visa }) => {
  const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  const [error, setError] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(null);

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];
  const {
    countryName,
    countryImgUrl,
    visaType,
    validity,
    Fee,
    application_method,
    _id,
    Processing_time,
  } = visa;
  const UpdateModal = async (id) => {
    try {
        const response = await fetch(`https://visa-navigator-server-nine.vercel.app/Allvisas/${id}`);
        const data = await response.json();
        document.getElementById("update_modal").showModal();
        setSelectedVisa(data);
    } catch (error) {
        setError(error.message);
    }
};

  const hanldeUpdateVisa = (event,id) => {

    event.preventDefault();
    const form= event.target;
    const countryName=form.countryName.value;
    const visaType=form.visaType.value;
    const countryImgUrl=form.countryImgUrl.value;
    const Processing_time=form.Processing_time.value;
    const Age_restriction=form.Age_restriction.value;
    const Fee=form.Fee.value;
    const validity=form.validity.value;
    const description=form.description.value;
    const application_method=form.application_method.value;
    const checkboxes = form.querySelectorAll(
      'input[name="Required_documents"]:checked'
    );
    
    const Required_documents=Array.from(checkboxes).map((checkbox) => checkbox.value);

    if (Age_restriction < 18) {
      setError("Age must be at least 18.");
      return; 
    }
    const updateVisa={countryName,visaType,countryImgUrl,Processing_time,Age_restriction,Fee,validity,description,application_method,Required_documents}
    console.log(updateVisa)
    fetch(`https://visa-navigator-server-nine.vercel.app/Allvisas/${id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updateVisa)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            document.getElementById('update_modal').close();
              Swal.fire({
                  title: 'Success!',
                  text: 'Visa updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
              });
              
              form.reset();
          }
      })
  }
  // delete handle 
  const handleDelete = (_id) => {
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
        fetch(`https://visa-navigator-server-nine.vercel.app/Allvisas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your visa has been deleted.", "success");
              const remain = visas.filter((viSA) => viSA._id !== _id);
              setVisas(remain);
            } else {
              Swal.fire("Error!", "Failed to delete Visa.", "error");
            }
          })
          .catch((error) => {
            console.error("Deletion Error:", error);
            Swal.fire("Error!", "An error occurred while deleting the Visa.", "error");
          });
      }
    });
  };

  return (
    <>
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
            <p>Processing time: {Processing_time}</p>
            <p>Application Method : {application_method}</p>
            <div className="flex my-10 justify-between  ">
              <button
                onClick={() => UpdateModal(_id)}
                className="btn bg-[#72214a] w-2/5 text-xl mx-auto hover:text-[#72214a] text-white items-center"
              >
                Update
              </button>
              <button onClick={()=>handleDelete(_id)} className="btn bg-[#72214a] w-2/5 mx-auto text-xl hover:text-[#72214a] text-white items-center">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}

      <dialog id="update_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className=" absolute right-2 text-2xl top-2 p-3">
              <IoMdClose />
            </button>
          </form>
          <div className="my-10">
            <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
              Update Visa
            </h2>
              <form
              onSubmit={(event)=>hanldeUpdateVisa(event,_id)}
              className=" p-5 w-4/5 border border-gray-300 mx-auto"
            >
              <div className="grid p-10  grid-cols-2  gap-5 max-md:grid-cols-1 max-md:w-full max-sm:w-full max-sm:grid-cols-1 mx-auto w-4/5">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Country Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Country Name"
                      name="countryName"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                     Visa Type
                    </span>
                  </label>
                  <label className="input-group">
                    {/* <input
                type="text"
                placeholder="Country Name"
                name="countryName"
                className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
              /> */}
                    <select
                      placeholder="Select Your Visa Type"
                      name="visaType"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    >
                      <option value="">Select Visa Type</option>
                      {visaTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Country image
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Country Image URL"
                      name="countryImgUrl"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Processing Time
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Processing Time"
                      name="Processing_time"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Age{" "}
                      {error && (
                        <p className="text-red-500 text-sm col-span-2 text-center">
                          {error}
                        </p>
                      )}
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      placeholder="Age"
                      name="Age_restriction"
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
                      placeholder="Fee"
                      name="Fee"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Validity
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Validity"
                      name="validity"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Application_Method
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Online/Offline"
                      name="application_method"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Required_documents
                    </span>
                  </label>
                  <label className="input-group">
                    {documentOptions.map((doc) => (
                      <div key={doc} className="flex items-center">
                        <input
                          type="checkbox"
                          name="Required_documents"
                          value={doc}
                        />
                        <label className="ml-2">{doc}</label>
                      </div>
                    ))}
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-[18px] text-[#72214a]">
                      Description
                    </span>
                  </label>
                  <label className="input-group">
                    <textarea
                      type="text"
                      placeholder="Write about Visa"
                      name="description"
                      className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control my-16 ">
                <label className="input-group">
                  <input
                    type="submit"
                    value="Update Visa"
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

export default VisaAdded;
