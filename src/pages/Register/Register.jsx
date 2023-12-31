/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Register = () => {
  const { googleLoginProvider, HandleCreateUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //  google User Create
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleLoginProvider(googleProvider)
      .then((result) => {
        swal("Good job!", "Successfully Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        toast.error(errorMessage[1]);
      });
  };

  //  register with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const capitalLetterPattern = /.*[A-Z].*/;
    const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    if (!capitalLetterPattern.test(password)) {
      return toast.warning("Add at-least a capital letter");
    } else if (!specialCharPattern.test(password)) {
      return toast.warning("Add at-least a special character");
    }

    HandleCreateUser(email, password)
      .then((result) => {
        result.user.displayName = name;
        result.user.photoURL = image;
        handleUpdateUserProfile(name, image);
        swal("Good job!", "Successfully Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        toast.error(errorMessage[1]);
      });
  };

  const handleUpdateUserProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="p-5 mx-auto shadow-xl rounded-lg border mt-20"
        >
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="text-primary-color w-full hover:text-white bg-white hover:bg-primary-color border border-primary-color hover:bg-secondColor/70  font-semibold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              placeholder="John doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Photo Url
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              placeholder="https://www.demoImage.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white font-semibold text-lg bg-primary-color w-full rounded py-2"
          >
            Submit
          </button>
          <Link className="mt-5 inline-block" to={"/login"}>
            Already have an account?
            <span className="underline">click here to Login</span>
          </Link>
        </form>
        <img
          className="hidden md:block w-full h-full object-cover"
          src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
          alt=""
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
