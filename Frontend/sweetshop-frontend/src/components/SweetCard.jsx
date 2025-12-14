import { useState } from "react";

const SweetCard = ({
  sweet,
  onPurchase,
  onDelete,
  onUpdate,
  onRestock,
  isAdmin,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [restockQty, setRestockQty] = useState(1);
  const [form, setForm] = useState({
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    quantity: sweet.quantity,
  });

  const outOfStock = sweet.quantity === 0;

  const handleUpdate = () => {
    onUpdate(sweet.id, {
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });
    setEditMode(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      {!editMode ? (
        <>
          <h3 className="text-lg font-semibold">{sweet.name}</h3>
          <p className="text-sm text-gray-600">{sweet.category}</p>
          <p className="mt-1 font-medium">₹ {sweet.price}</p>
          <p className="text-sm">
            Stock:{" "}
            <span className={outOfStock ? "text-red-500" : "text-green-600"}>
              {sweet.quantity}
            </span>
          </p>
        </>
      ) : (
        <>
          <input
            className="border p-1 mb-1"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-1 mb-1"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <input
            type="number"
            className="border p-1 mb-1"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="number"
            className="border p-1 mb-1"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />
        </>
      )}

      {/* USER + ADMIN */}
      <button
        disabled={outOfStock}
        onClick={() => onPurchase(sweet.id)}
        className={`mt-3 py-2 rounded text-white ${
          outOfStock
            ? "bg-gray-400"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        Purchase
      </button>

      {/* ADMIN ACTIONS */}
      {isAdmin && (
        <>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex-1 bg-yellow-500 text-white py-1 rounded"
            >
              {editMode ? "Cancel" : "Edit"}
            </button>

            <button
              onClick={() => onDelete(sweet.id)}
              className="flex-1 bg-red-600 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>

          {editMode && (
            <button
              onClick={handleUpdate}
              className="mt-2 bg-green-600 text-white py-1 rounded"
            >
              Save
            </button>
          )}

          {/* RESTOCK */}
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              min="1"
              className="border p-1 w-full"
              value={restockQty}
              onChange={(e) => setRestockQty(e.target.value)}
            />
            <button
              onClick={() => onRestock(sweet.id, restockQty)}
              className="bg-blue-600 text-white px-3 rounded"
            >
              Restock
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SweetCard;
