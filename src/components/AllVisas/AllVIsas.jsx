import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../VisaCard/VisaCard";
import { Link } from "react-router-dom";

const AllVIsas = () => {
  document.title="All Visas";
  const loadedVisa = useLoaderData();
  const [visas, setVisas] = useState(loadedVisa);
  return (
    <div>
      <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
        All Visas
      </h2>
      <div className="grid my-5  grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {visas.map((visa) => (
          <VisaCard
            key={visa.insertedID}
            visas={visas}
            setVisas={setVisas}
            visa={visa}
          ></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default AllVIsas;
