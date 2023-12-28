import { useLoaderData, useParams } from "react-router-dom";
import DonateDisplay from "./DonateDisplay";

const Donate = () => {

    const donations = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)

    const donate = donations.find(donation => donation.id === intId);

    return (
        <div className="max-w-screen-xl mx-auto py-10 lg:py-24 px-3 md:px-4 lg:px-1">
            <DonateDisplay donate={donate}></DonateDisplay>
        </div>
    );
};

export default Donate;