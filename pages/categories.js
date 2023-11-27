import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from "react-sweetalert2";

function Categories({ swal }) {
  const [editedCategory, setEditedCategory] = useState(null);
  const [name, setName] = useState();
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  function fetchCategories() {
    axios.get("/api/categories").then((result) => setCategories(result.data));
  }
  async function saveCategory(e) {
    e.preventDefault();
    const data = { name, parentCategory };
    if (editedCategory) {
      data._id = editedCategory._id;
      await axios.put("/api/categories", data);
      setEditedCategory(null);
    } else {
      await axios.post("/api/categories", data);
    }
    setName("");
    fetchCategories();
  }
  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
  }
  function deleteCategory(category) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${category.name} ?`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        // reverseButtons: true,
        didOpen: () => {
          // run when swal is opened...
        },
        didClose: () => {
          // run when swal is closed...
        },
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = category;
          await axios.delete(`/api/categories?_id=${_id}`);
          fetchCategories();
        }
      })
      .catch((error) => {
        // when promise rejected...
      });
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>
        {editedCategory
          ? `Edit category ${editedCategory.name}`
          : "Create new category"}
      </label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            onChange={(e) => setParentCategory(e.target.value)}
            value={parentCategory}
          >
            <option value="">No parent category</option>
            {categories.length > 0 &&
              categories.map((category, index) => (
                <option value={category._id} key={index}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block">Properties</label>
          <button className="btn-default !text-sm">Add new property</button>
        </div>
        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
      <table className="basic">
        <thead>
          <tr>
            <td>Category Name</td>
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category?.parent?.name}</td>
                <td className="">
                  <button
                    className="btn-primary mr-2 my-1"
                    onClick={() => editCategory(category)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCategory(category)}
                    className="btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
