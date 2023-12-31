import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const {isAdmin} = useAdmin();
  const {isInstructor} = useInstructor();
  console.log(isAdmin);
  let dashboardLinks;
  if (isAdmin) {
    dashboardLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/instructors">Instructors</NavLink>
        </li>
        <div className="divider divider-horizontal"></div>
        <div className="divider"></div>
        <li>
          <NavLink to="/dashboard/manageClasses">All Classes</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">All Users</NavLink>
        </li>
      </>
    );
  } else if (isInstructor) {
    dashboardLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/instructors">Instructors</NavLink>
        </li>
        <div className="divider divider-horizontal"></div>
        <div className="divider"></div>
        <li>
          <NavLink to="/dashboard/addClass">Add Class</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myClasses">My Classes</NavLink>
        </li>
      </>
    );
  } else {
    dashboardLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/instructors">Instructors</NavLink>
        </li>
        <div className="divider divider-horizontal"></div>
        <div className="divider"></div>
        <li>
          <NavLink to="/dashboard/selectedClasses">Selected Class</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/enrolledClasses">Enrolled Class</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payment/:id">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payment-history">My Payments</NavLink>
        </li>
      </>
    );
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-teal-500">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 text-3xl text-white font-semibold px-2 mx-2">
            Athleti Camp Dashboard
          </div>
          <div className="drawer-item flex-none hidden lg:block">
            <ul className="menu menu-horizontal">{dashboardLinks}</ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-teal-500">{dashboardLinks}</ul>
      </div>
    </div>
  );
};

export default Dashboard;
