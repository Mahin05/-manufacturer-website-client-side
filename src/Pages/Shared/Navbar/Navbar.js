import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const logout = () => {
    //     signOut(auth);
    //     localStorage.removeItem('accessToken');
    // };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> :
            <Link to="/login">Login</Link>}</li> */}
    </>
    return (
        <div style={{'margin-bottom':'10%'}} className="navbar bg-error-content text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-300 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ISLAM'S TOOLS SHOP</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabIndex="1" for="dashboard-sidebar"  className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            </div>
        </div>
    );
};

export default Navbar;