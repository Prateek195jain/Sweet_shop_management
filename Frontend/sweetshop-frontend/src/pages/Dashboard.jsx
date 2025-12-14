import { useEffect, useState } from "react";
import {
  getAllSweets,
  searchSweets,
  purchaseSweet,
  deleteSweet,
  addSweet,
  updateSweet,
  restockSweet,
} from "../api/sweetApi";
import SweetCard from "../components/SweetCard";
import AddSweetForm from "../components/AddSweetForm";
import Navbar from "../components/Navbar";
import useAuth from "../context/useAuth";

const Dashboard = () => {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const { role } = useAuth();

  useEffect(() => {
    const fetchSweets = async () => {
      const res = await getAllSweets();
      setSweets(res.data);
    };

    fetchSweets();
  }, []);

  const reloadSweets = async () => {
    const res = await getAllSweets();
    setSweets(res.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return reloadSweets();
    const res = await searchSweets({ name: search });
    setSweets(res.data);
  };

  const handlePurchase = async (id) => {
    await purchaseSweet(id, 1);
    reloadSweets();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this sweet?")) {
      await deleteSweet(id);
      reloadSweets();
    }
  };

  const handleAddSweet = async (data) => {
    await addSweet(data);
    reloadSweets();
  };

  const handleUpdateSweet = async (id, data) => {
    await updateSweet(id, data);
    reloadSweets();
  };

  const handleRestock = async (id, qty) => {
    await restockSweet(id, qty);
    reloadSweets();
  };

  return (
    <>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          Sweet Shop Dashboard
        </h1>

        {/* ADMIN ADD FORM */}
        {role === "ADMIN" && <AddSweetForm onAdd={handleAddSweet} />}

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="Search sweets"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-indigo-600 text-white px-4 rounded">
            Search
          </button>
        </form>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sweets.map((sweet) => (
            <SweetCard
              key={sweet.id}
              sweet={sweet}
              onPurchase={handlePurchase}
              onDelete={handleDelete}
              onUpdate={handleUpdateSweet}
              onRestock={handleRestock}
              isAdmin={role === "ADMIN"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
