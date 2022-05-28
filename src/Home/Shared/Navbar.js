/* import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
const Navbar = () => {
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };
    const [user] = useAuthState()
    const menuBar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myportfolio'>MyPortfolio</Link></li>
        <li> {
            user ? <button className="btn btn-ghost" onClick={logout} >Logout</button>
                :
                <NavLink to="/login">Login</NavLink>}</li>
    </>
    return (
        <div class="navbar bg-base-100 flex justify-between ">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-3xl font-bold">CARPENCO</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>

        </div>

    );
};

export default Navbar; */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {

    const [user] = useAuthState(auth);


    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    return (
        <div>
            <div className="navbar flex justify-between bg-base boxShadow z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/allproducts" >All Products</NavLink></li>
                            <li><NavLink to="/blog" >Blogs</NavLink></li>
                            <li><NavLink to="/myportfolio" >Portfolio</NavLink></li>
                            {user &&
                                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>

                            }
                            {
                                user && <p className='mt-3 font-bold'>{user.displayName}</p>
                            }
                            <li> {user ? <button className="btn btn-ghost" onClick={logout} >Logout</button> : <NavLink to="/login">Login</NavLink>}</li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-sans font-bold text-primary  normal-case text-xl">CARPENCO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className='mx-4' to="/" >Home</NavLink></li>
                        <li><NavLink to="/allproducts" >All Products</NavLink></li>
                        <li><NavLink className='mx-4' to="/blog" >Blogs</NavLink></li>
                        <li><NavLink className='mx-4' to="/myportfolio" >Portfolio</NavLink></li>
                        {/* <li><NavLink className='mx-4' to="/dashboard" >Dashboard</NavLink></li> */}
                        {user &&
                            <li><NavLink to="/dashboard" >Dashboard</NavLink></li>

                        }
                        {
                            user && <p className='mt-3 font-bold'>{user.displayName}</p>
                        }
                        <li> {user ? <button className="btn btn-ghost" onClick={logout} >Logout</button> : <NavLink to="/login">Login</NavLink>}</li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboardSidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;