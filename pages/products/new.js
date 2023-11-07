import Layout from "@/components/Layout";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);
  async function createProduct(e) {
    e.preventDefault();
    const data = {title, description, price}
    await axios.post('/api/products', data)
    setGoToProduct(true)
  };

  if(goToProducts){
    return redirect('/api/products')
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <div className="flex flex-col">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Price (USD)</label>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button className="btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}
