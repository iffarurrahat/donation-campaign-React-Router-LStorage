import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[60vh] flex justify-center items-center">
            <div className="text-center">
                <h3 className="text-3xl text-red-500 py-10">This Page do not exist</h3>
                <Link to='/'><button className="bg-green-500 px-4 py-3 rounded text-white">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;