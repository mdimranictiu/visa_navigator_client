import React from 'react';
import imgAss from '../../assets/img/ass.jpg'
import { Link } from 'react-router-dom';

const FreeAssesment = () => {
    return (
        <div className="my-10">
    <div className="flex flex-col md:flex-row shadow-xl bg-[#e4dede] w-4/5 mx-auto h-auto md:h-[500px] rounded-xl justify-around items-center   p-5">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
            <img 
                src={imgAss} 
                alt="Img not found" 
                className="max-h-[400px] rounded-lg shadow-lg" 
            />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-4 p-4 text-center">
            <h2 className="text-3xl font-bold">Free Online Visa Assessment</h2>
            <p className="text-justify">
                Are you thinking about exploring opportunities abroad? You're in the right place! 
                With our Free Online Visa Assessment, we help you understand your eligibility 
                and guide you through the process effortlessly. Get started today and take the first 
                step toward your dreams.
            </p>
            <Link to="/assessment">
                <button className="text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a] px-6 py-3 mt-4 rounded-lg shadow  transition">
                    Get Free Assessment
                </button>
            </Link>
        </div>
    </div>
</div>

    );
};

export default FreeAssesment;