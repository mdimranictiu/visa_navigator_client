import React, { useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddVisa = () => {
  document.title="Add Visa";

  const { user } = useContext(AuthContext);
  const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  const [error, setError] = useState("");

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];
  const hanldeAddVisaSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const countryImgUrl = form.countryImgUrl.value;
    const Processing_time = form.Processing_time.value;
    const Age_restriction = form.Age_restriction.value;
    const Fee = form.Fee.value;
    const validity = form.validity.value;
    const description = form.description.value;
    const application_method = form.application_method.value;
    const checkboxes = form.querySelectorAll(
      'input[name="Required_documents"]:checked'
    );

    const Required_documents = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );

    if (Age_restriction < 18) {
      setError("Age must be at least 18.");
      return;
    }
    setError("");
    const email = user.email;
    const newVisa = {
      countryName,
      visaType,
      countryImgUrl,
      Processing_time,
      Age_restriction,
      Fee,
      validity,
      description,
      application_method,
      Required_documents,
      email,
    };
    console.log(newVisa);
    form.reset();
    fetch("https://visa-navigator-server-nine.vercel.app/addvisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa is Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
        Add Visa
      </h2>
      <form
        onSubmit={hanldeAddVisaSubmit}
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
              <span className="label-text text-[18px] text-[#72214a]">Fee</span>
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
              value="Add Visa"
              className="input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
