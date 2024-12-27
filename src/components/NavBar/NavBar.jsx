import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';
import logo from "../../assets/img/visa_navigator_icon.jpg"

const NavBar = () => {
  const {user, loading,signOutUser} = useContext(AuthContext)
  const [isHovered, setIsHovered] = useState(false);
  console.log(user,loading);
  const handleSignOut = () => {
    signOutUser()
        .then(() => {
            Swal.fire({
                title: 'Signed Out Successfully!',
                text: 'You have been logged out.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);

            Swal.fire({
                title: 'Sign Out Failed',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        });
};


  const links=
  <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/Allvisas'>All visas</Link></li>
  {user && 
  (
    <>
    <li><Link to='/AddVisa'>Add Visa</Link></li>
    <li><Link to={`/Myaddedvisas/${user.email}`}>My Added Visas</Link></li>
    <li><Link to={`/MyVisaapplications/${user.email}`}>My Visa Applications</Link></li>
    <br />
   
    </>
  )
  }
  
  
  
  </>

  const LogRegister=
  <>
  {
    user? (
      <div className="flex items-center gap-4">
    
      <button onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-blue-500 transition duration-300">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-full h-full object-cover"
        />
         {isHovered && (
            <div className="absolute top-14  transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 shadow-lg">
              {user.displayName || "User"}
            </div>
          )}
      </button>

     
      <button onClick={handleSignOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
       Log out
      </button>
    </div>  
    
    ):
    (
      <div className="flex space-x-2">
      <Link
        to="/login"
        className=" px-4 py-2  rounded"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-4 py-2 rounded "
      >
        Register
      </Link>
    </div>
    )
  }
  
  </>
    
    return (
     <>
     
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {/* Links */}
        {links}
      </ul>
    </div>
    <Link to="/"><a className="btn btn-ghost text-3xl">VN</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-2xl menu-horizontal px-1">
      {/* Links */}
      {links}
    </ul>
  </div>
  <div className="navbar-end text-2xl">
   {/* Login/Register section */}

{LogRegister}

  </div>
</div>
  
     </>
    );
};

export default NavBar;