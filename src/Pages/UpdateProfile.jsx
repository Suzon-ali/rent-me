
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import { updateProfile } from 'firebase/auth';

function UpdateProfile() {
  const { user, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);
    
    updateProfile(user, {
      displayName: displayName, 
      photoURL: photoURL
    })
      .then(() => {
        navigate('/profile');
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error updating profile:', error);
      });
  };

  return (
    <>
    <Helmet>
      <title>Update Profile</title>
    </Helmet>
    
    <div className="flex justify-center items-center h-auto pt-10 mt-24">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Update Profile</h2>
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label htmlFor="displayName" className="block text-gray-700">
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="bg-success/90 text-white px-4 py-2 rounded-md hover:bg-success focus:outline-none focus:bg-success"
            >
              Save Profile
            </button>
            <Link to="/profile" className="text-success/90 hover:text-success">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default UpdateProfile;
