import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
  document.title="Login";
    const { signInUser,signInwithGoogle } = useContext(AuthContext);
    const navigate= useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Welcome back!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                }).then(() => {
                    navigate('/')
                });

                form.reset();
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);

                Swal.fire({
                    title: 'Login Failed',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            });
    };
    const handleGoogleSignIn = () => {
     
  
      signInwithGoogle()
          .then((userCredential) => {
              const user = userCredential.user;
              Swal.fire({
                  title: 'Sign In Successful!',
                  text: `Welcome back, ${user.displayName || 'User'}!`,
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,
              }).then(() => {
                  navigate('/');
              });
          })
          .catch((error) => {
              const errorMessage = error.message;
              console.error(errorMessage);
  
              Swal.fire({
                  title: 'Sign In Failed',
                  text: errorMessage,
                  icon: 'error',
                  confirmButtonText: 'Try Again',
              });
          });
  };
    return (
        <div className="my-10">
        <h2 className="text-3xl py-5 font-bold text-center text-[#72214a]">
          Log In
        </h2>
        <div className=" p-5 w-4/5 border border-gray-300 mx-auto">
        <form onSubmit={handleLogin} >
          <div className="grid p-10  max-md:w-full max-sm:w-full mx-auto w-4/5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[18px] text-[#72214a]">
                Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[18px] text-[#72214a]">
                  Password
                </span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full"
                />
              </label>
            </div>
         
          </div>
          <div className="form-control my-16 ">
            <label className="input-group">
              <input
                type="submit"
                value="Log In"
                className="input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]"
              />
            </label>
           
            <p className='text-center mt-5'>Are you new to here?  <Link className='font-bold' to="/register"> Register</Link> </p>
          </div>
         
          
        </form>
        <label className="input-group">
<button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]">
    <FaGoogle className="text-[24px]" />
    Continue with Google
</button>

            </label>
        </div>
        
      </div>
    );
};

export default LogIn;