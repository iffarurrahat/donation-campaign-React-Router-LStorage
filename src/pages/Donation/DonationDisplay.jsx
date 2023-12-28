import PropTypes from 'prop-types';

const DonationDisplay = ({ donate }) => {

    const { image, title, category, donate_amount, card_color, category_color, title_color, } = donate || {}

    return (
        <div className='flex items-center rounded-lg' style={{ backgroundColor: card_color }}>
            <img className='w-56 h-full object-cover rounded-l-lg' src={image} alt="" />
            <div className='p-6'>
                <span className='text-sm px-3 py-1 font-medium rounded-lg' style={{ backgroundColor: category_color, color: title_color }} >{category}</span>
                <h2 className='text-xl mt-2 font-semibold' style={{ color: title_color }}>{title}</h2>
                <p className='mt-2 font-semibold' style={{ color: title_color }}>${donate_amount.toFixed(2)}</p>
                <button className='px-4 py-2 rounded-lg mt-5 text-white font-semibold' style={{ backgroundColor: title_color }}>View Details</button>
            </div>
        </div>
    );
};

DonationDisplay.propTypes = {
    donate: PropTypes.object,
};

export default DonationDisplay;