import api from "./axios";

// USER + ADMIN
export const getAllSweets = () => api.get("/api/sweets");

export const searchSweets = (params) =>
  api.get("/api/sweets/search", { params });

export const purchaseSweet = (id, quantity) =>
  api.post(`/api/sweets/${id}/purchase`, null, {
    params: { quantity },
  });

// ADMIN
export const addSweet = (data) =>
  api.post("/api/sweets", data);

export const deleteSweet = (id) =>
  api.delete(`/api/sweets/${id}`);

export const updateSweet = (id, data) =>
  api.put(`/api/sweets/${id}`, data);

export const restockSweet = (id, quantity) =>
  api.post(`/api/sweets/${id}/restock`, null, {
    params: { quantity },
  });
