import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DonateDisplay = ({ donate }) => {
    const { id, image, title, description, donate_amount, title_color } = donate || {}

    const handleSaveDonateLS = () => {

        const addedDonateArray = []

        const donateItem = JSON.parse(localStorage.getItem('donate-cart'))

        if (!donateItem) {
            addedDonateArray.push(donate)
            localStorage.setItem('donate-cart', JSON.stringify(addedDonateArray))
            swal("Good job!", "You Donate is Successfully First Time.", "success");
        }
        else {

            const isExist = donateItem.find(donate => donate.id === id)
            if (!isExist) {
                addedDonateArray.push(...donateItem, donate)
                localStorage.setItem('donate-cart', JSON.stringify(addedDonateArray))
                swal("Good job!", "You Donate is Successfully", "success");
            }
            else {
                swal("Warning", "You Already Donated!", "warning");
            }

        }

    }

    return (
        <div>
            <div className='relative'>
                <img className='h-full md:h-[500] lg:h-[700px] w-full mx-auto rounded-lg' src={image} alt="" />
                <div className='absolute w-full h-20 md:h-[150px] bottom-0 left-0 rounded-b-lg bg-[#0b0b0b80]'></div>
                <div className='absolute bottom-5 md:bottom-10 left-5 md:left-10'>
                    <button onClick={handleSaveDonateLS} className='text-white py-2 md:py-4 px-4 md:px-6 rounded' style={{ backgroundColor: title_color }}>Donate ${donate_amount}</button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mt-5 md:mt-10 mb-3 mb:mb-6'>{title}</h1>
            <p className='text-[#0B0B0B70] leading-7'>{description}</p>
        </div>
    );
};

DonateDisplay.propTypes = {
    donate: PropTypes.object,
};

export default DonateDisplay;