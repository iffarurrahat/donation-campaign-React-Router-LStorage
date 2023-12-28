import PropTypes from 'prop-types';
import HomeCardsDisplay from "./HomeCardsDisplay";

const HomeCards = ({ donations }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-10 lg:py-24 px-3 md:px-4 lg:px-1">
            {
                donations?.map(donation => <HomeCardsDisplay key={donation.id} donation={donation}></HomeCardsDisplay>)
            }
        </div>
    );
};


HomeCards.propTypes = {
    donations: PropTypes.array,
};
export default HomeCards;