import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCardsDisplay = ({ donation }) => {
    const { id, image, title, category, card_color, category_color, title_color, } = donation || {}

    return (
        <Link to={`/donate/${id}`}>
            <div className='rounded-lg' style={{ backgroundColor: card_color }}>
                <img className='w-full h-48 object-cover rounded-lg' src={image} alt="" />
                <div className='p-4'>
                    <span className='text-sm px-3 py-1 font-medium rounded-lg' style={{ backgroundColor: category_color, color: title_color }} >{category}</span>
                    <h2 className='text-xl mt-2 font-semibold' style={{ color: title_color }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

HomeCardsDisplay.propTypes = {
    donation: PropTypes.object,
};

export default HomeCardsDisplay;