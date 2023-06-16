import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructors/PopularInstructor';
import NewsLetter from '../NewsLetter/NewsLetter';
import ThemeToggle from '../../../components/ThemeToggle';
import { ThemeContext } from '../../../providers/ThemeProviders';

const Home = () => {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <NewsLetter></NewsLetter>
            <ThemeToggle></ThemeToggle>
        </div>
    );
};

export default Home;