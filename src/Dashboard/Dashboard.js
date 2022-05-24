import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboardSidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li><Link to="/dashboard">My Services</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                    <li><Link to="/dashboard/history">History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;