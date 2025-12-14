import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">Sweet Shop</h1>

      <div className="flex items-center gap-4">
        {role && (
          <span className="bg-white text-indigo-600 px-3 py-1 rounded text-sm">
            {role}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
