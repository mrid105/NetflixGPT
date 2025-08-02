import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
        navigate("/browse");
      } else {
        //user signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
//for cleaning up and unsubscribing from the onAuthStateChanged when the component is unmounted
    return ()=> unsubscribe();
  }, []);
  return (
    <div className="w-screen flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img className="h-16 w-16 p-2 m-2" src={user?.photoURL} alt="user-icon"/>
          <button
            onClick={handleSignOut}
            className=" rounded-lg p-2 m-2 bg-red-600 text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
