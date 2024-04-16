import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="flex flex-col items-center mt-24 min-h-60">
        {user && (
          <>
            <img
              src={user.photoURL || "default-avatar.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold uppercase">
              {user.displayName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </>
        )}
        {!user && <p>Please log in to view your profile.</p>}

        <Link to="/update-profile" >
        <button
              type="submit"
              className="bg-success/90 text-white px-4 py-2 rounded-md hover:bg-success focus:outline-none focus:bg-success"
            >
              Update Profile
            </button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
