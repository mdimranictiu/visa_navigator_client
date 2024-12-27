import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import {updateProfile} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';



const Register = () => {
  const { createUser,signInwithGoogle } = useContext(AuthContext);
  const navigate= useNavigate();
  const [error, setError] = useState('');
  document.title="Register";

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    if (!uppercaseRegex.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!lowercaseRegex.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (password.length < minLength) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  const handleRegister =  (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      const registerData = { name, email, photoURL, password };
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }
      setError(''); 

      createUser(email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);

              // Update user profile
              updateProfile(user, {
                  displayName: name,
                  photoURL: photoURL,
              }).then(() => {
                  Swal.fire({
                      title: 'Registration Successful!',
                      text: 'Your account has been created successfully.',
                      icon: 'success',
                      showConfirmButton: false,
                      timer: 1000,
                  });
                  form.reset();
                  navigate('/')
              }).catch((error) => {
                  console.error('Profile update error:', error);
              });
          })
          .catch((error) => {
              const errorMessage = error.message;
              console.error(errorMessage);

              Swal.fire({
                  title: 'Registration Failed',
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
          Register
        </h2>
        <div className=" p-5 w-4/5 border border-gray-300 mx-auto">
        <form onSubmit={handleRegister} >
          <div className="grid p-10  max-md:w-full max-sm:w-full mx-auto w-4/5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[18px] text-[#72214a]">
                  Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full" required
                />
              </label>
            </div>
        
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
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full" required
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[18px] text-[#72214a]">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full" required
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
                  className="input text-[18px] input-bordered w-4/5 mx-auto max-sm:w-full" required
                />
              </label>
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            </div>
         
          </div>
          <div className="form-control my-16 ">
            <label className="input-group">
              <input
                type="submit"
                value="Register"
                className="input input-bordered font-semi-bold text-[22px] w-2/5 max-sm:w-full max-sm:mx-auto ml-[30%] text-white hover:bg-white duration-300 cursor-pointer bg-[#72214a] hover:text-[#72214a]"
              />
            </label>
            <p className='text-center mt-5'>Already have an account? <Link className='font-bold' to="/login"> Login</Link> </p>
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

export default Register;