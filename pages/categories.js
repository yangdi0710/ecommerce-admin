import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [name, setName] = useState();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories()
  }, []);
  function fetchCategories(){
    axios.get("/api/categories").then((result) => setCategories(result.data));
  }
  async function saveCategory(e) {
    e.preventDefault();
    await axios.post("/api/categories", { name });
    setName("");
    fetchCategories()
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
        <tbody>
          {categories.length > 0 && categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
