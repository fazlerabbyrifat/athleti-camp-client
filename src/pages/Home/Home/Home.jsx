import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructors/PopularInstructor';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;