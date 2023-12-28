import { useEffect, useState } from "react";
import DonationDisplay from "./DonationDisplay";

const Donation = () => {

    const [donateData, setDonateData] = useState([]);
    const [noFound, setNoFound] = useState(false);
    // const [isShow, setIsShow] = useState(false);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate-cart'))
        if (donateItem) {
            setDonateData(donateItem)
        }
        else {
            setNoFound('No Data Exist')
        }


    }, [])

    return (
        <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-2 md:px-4 lg:px-1">
            <h3 className="text-center  text-2xl pb-8">Donation: {donateData.length}</h3>
            {noFound && <p className="h-20 md:h-[60vh] flex justify-center items-center">{noFound}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    donateData.slice(0, dataLength).map((donate, index) => <DonationDisplay key={index} donate={donate}></DonationDisplay>)
                }
            </div>
            
            <div className={dataLength === donateData.length ? "hidden" : "text-center"}>
                {
                    donateData.length > 4 && <button onClick={() => setDataLength(donateData.length)} className="bg-[#009444] text-white px-6 py-3 rounded-lg mt-8 ">Show All</button>
                }
            </div>
        </div>
    );
};

export default Donation;