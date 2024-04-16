
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

function Login() {

  const {signIn, user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
    .then()
    .catch(error =>{
      console.log(error)
    })

  };

  if(user){
    navigate('/') 
  }

  return (
    <div className="flex justify-center items-center h-auto pt-14 mt-24">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button type="submit" className="bg-success/80 text-white px-4 py-2 rounded-md hover:bg-success focus:outline-none focus:bg-success">Login</button>
            <a href="#" className="text-indigo-500 hover:text-indigo-700">Forgot Password?</a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Google</button>
            <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">GitHub</button>
          </div>
          <p className="mt-4 text-center">Do not have an account? <Link to={'/register'} className="text-indigo-500 hover:text-indigo-700">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login