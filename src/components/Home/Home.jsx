import React from 'react';
import Header from '../Header/Header';
import LatestVisa from '../LatestVIsa/LatestVisa';
import CustomerReview from '../CustomerReview/CustomerReview';
import FreeAssesment from '../FreeAssesment/FreeAssesment';

const Home = () => {
  document.title="Home || Visa Navigator";

    return (
        <div>
            <Header></Header>
            <LatestVisa></LatestVisa>
            <CustomerReview></CustomerReview>
            <FreeAssesment></FreeAssesment>
            
        </div>
    );
};

export default Home;