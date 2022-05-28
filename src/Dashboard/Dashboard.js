import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side ">
                <label htmlFor="dashboardSidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {/* <li><Link to="/dashboard">My Services</Link></li> */}
                    {!admin &&
                        <li><Link to="/dashboard/review">Review</Link></li>
                    }
                    {admin &&
                        <li><Link to="/dashboard/additem">Add Item</Link></li>
                    }
                    {admin &&
                        <li><Link to="/dashboard/allorder">All Order</Link></li>
                    }
                    {!admin &&
                        <li><Link to="/dashboard/myorder">My Order</Link></li>
                    }
                    {admin &&
                        <li><Link to="/dashboard/addadmin">Add Admin</Link></li>
                    }
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;