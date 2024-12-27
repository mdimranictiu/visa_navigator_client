import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Application from '../Application/Application';

const MyVisaApplications = () => {
    const loadedApplication = useLoaderData();
    const [applications, setApplications] = useState(loadedApplication);
    console.log(loadedApplication)

    return (
        <div>
            <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
                My Visa Applications
            </h2>
            <div className="grid my-5 grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                {applications.map(application => (
                    <Application
                        key={application._id}
                        application={application}  // Pass the individual application
                        setApplications={setApplications} applications={applications} // Optional: Only pass this if the child needs to update the state
                    />
                ))}
            </div>
        </div>
    );
};

export default MyVisaApplications;
