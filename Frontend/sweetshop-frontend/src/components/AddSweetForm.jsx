import { useState } from "react";

const AddSweetForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });

    // reset form
    setForm({
      name: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6"
    >
      <h2 className="text-lg font-bold mb-4">Add Sweet</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          name="name"
          placeholder="Name"
          className="border p-2"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="border p-2"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="border p-2"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          className="border p-2"
          value={form.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Sweet
      </button>
    </form>
  );
};

export default AddSweetForm;
