import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import { Product } from "@/models/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage({ title, description, price }) {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((response) => {
      setProductInfo(response.data);
    });
  });
  return (
    <Layout>
      <ProductForm {...productInfo} />
    </Layout>
  );
}
