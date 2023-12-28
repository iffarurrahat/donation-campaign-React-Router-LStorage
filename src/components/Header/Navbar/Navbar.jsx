import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import Logo from "../Logo/Logo";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/donation', name: 'Donation' },
        { id: 3, path: '/statistics', name: 'Statistics' },
    ];

    return (
        <div className="absolute top-0 left-0 right-0 z-50">
            <nav className="flex items-center justify-between py-2 max-w-screen-xl mx-auto px-3 md:px-6 lg:px-1">
                <h1 className="text-3xl font-3xl">
                    <Logo></Logo>
                </h1>
                <div>
                    <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                        {
                            open ? <RiCloseLine /> : <RiMenu2Line />
                        }
                    </div>
                    <ul className={`md:flex gap-6 absolute md:static bg-slate-200 md:bg-transparent mr-4 md:mr-0 right-0 px-6 md:px-0 py-4 rounded-lg ${open ? 'top-16' : '-top-60'}`}>
                        {
                            routes.map(route => <li key={route.id}><NavLink to={route.path} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }  >{route.name}</NavLink></li>)
                        }
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;