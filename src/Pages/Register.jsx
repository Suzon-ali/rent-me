import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

function Register() {
  const { createUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const name = form.get('name');
    const password = form.get('password');
    const photoUrl = form.get('photoUrl');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least 6 characters, including one uppercase letter and one lowercase letter.'
      );
      return; 
    }

    setPasswordError('');

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            navigate('/');
            toast.success('Registration successful!');
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
  };

  return (
    <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <div className="flex justify-center items-center h-auto pt-10 mt-24">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photoUrl"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Register
            </button>
            <Link to="/login" className="text-indigo-500 hover:text-indigo-700">
              Already have an account?
            </Link>
          </div>
        </form>
        <p className="text-red-400">{passwordError}</p>
      </div>
    </div>
    </>
  );
}

export default Register;
