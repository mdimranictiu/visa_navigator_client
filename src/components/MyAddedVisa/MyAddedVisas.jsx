import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import VisaAdded from '../VIsaAdded/VisaAdded';

const MyAddedVisas = () => {
    const loadedVisa=useLoaderData();
    const [visas,setVisas]=useState(loadedVisa)
    return (
        <div>
        <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
     My Added Visas
   </h2>
         <div className='grid my-5  grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
         {
             visas.map(visa=><VisaAdded key={visa._id} visas={visas} setVisas={setVisas} visa={visa}></VisaAdded>)
         }
         </div>
     </div>
    );
};

export default MyAddedVisas;