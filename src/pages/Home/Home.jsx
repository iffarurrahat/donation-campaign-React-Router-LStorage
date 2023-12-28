import Banner from "../../components/Header/Banner/Banner";
import HomeCards from "../../components/HomeCards/HomeCards";
import { useEffect, useState } from "react";

const Home = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('/donations.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])
    
    const handleSearchBtn = () => {
        const searchFiled = document.getElementById('search-filed');
        const searchText = searchFiled.value;
        const search = searchText.toLowerCase();
        searchFiled.value = "";
        const filterData = donations.filter(data => data.category.toLowerCase() === search)
        // console.log(filterData);
        setDonations(filterData)
    }


    return (
        <div>
            <Banner handleSearchBtn={handleSearchBtn}></Banner>
            <HomeCards donations={donations}></HomeCards>
        </div>
    );
};

export default Home;