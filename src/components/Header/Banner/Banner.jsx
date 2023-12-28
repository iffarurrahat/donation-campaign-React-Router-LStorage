import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({ handleSearchBtn }) => {

    return (
        <div className="banner-bg h-80 md:h-96 lg:h-[calc(100vh-88px)] flex justify-center items-center">
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
                <div className='mt-5 md:mt-10 px-3 md:mz-0 text-center'>
                    <input id="search-filed" className='border border-r-0 p-2 md:p-3 rounded-l-lg md:w-2/4' type="text" placeholder='Search here...' />
                    <button onClick={handleSearchBtn} className='border border-[#FF444A] bg-[#FF444A] text-white  px-4 md:px-7 py-2 md:py-3 rounded-r-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};


Banner.propTypes = {
    handleSearchBtn: PropTypes.func,
};

export default Banner;