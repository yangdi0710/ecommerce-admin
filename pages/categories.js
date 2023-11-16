import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function Categories() {
  const [name, setName] = useState();
  function saveCategory(e) {
    e.preventDefault();
    axios.post("/api/categories", { name });
    setName("");
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCategory} className="flex gap-2">
        <input
          type="text"
          placeholder="Category name"
          className="mb-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          ADD
        </button>
      </form>
      <table className="basic">
        <thead>
          <tr>
            <td>Category Name</td>
          </tr>
        </thead>
      </table>
    </Layout>
  );
}
