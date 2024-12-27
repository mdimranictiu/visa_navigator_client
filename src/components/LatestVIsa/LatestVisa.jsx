import React, { useState, useEffect } from 'react';
import VisaCard from '../VisaCard/VisaCard';
import { Link } from 'react-router-dom';

const LatestVisa = () => {
  const [visa, setVisa] = useState([]); 

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://visa-navigator-server-nine.vercel.app/latestVisa')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log(data); // Log the fetched data
        setVisa(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure it runs only once on mount.

  return (
    <div className='my-10'>
      <h2 className="text-4xl py-5 font-bold text-center text-[#72214a]">
        Latest Visa
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {visa.map((visa) => (
          <VisaCard
            key={visa.insertedID} // Assuming `insertedID` is unique for each visa
            visa={visa} // Pass the entire visa list as a prop if needed
            setVisa={setVisa} // Pass the setVisa function as a prop if needed
            
          />
        ))}
      </div>
      <div className='py-5 w-1/2 mx-auto'>
      <Link to={`/Allvisas`}><button className='input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]'>See All Visas</button></Link>
      </div>
    </div>
  );
};

export default LatestVisa;
