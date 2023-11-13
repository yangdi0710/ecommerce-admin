import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    if (!id) return;
    axios.get(`/api/products?id=${id}`).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  async function deleteProduct() {
    await axios.delete(`/api/products?id=${id}`).then((response) => {
      goBack()
    });
  }
  function goBack() {
    router.push("/products");
  }
  return (
    <Layout>
      <h1 className="text-center">
        Do you want to delete &#34;{productInfo?.title}&#34;?
      </h1>
      <div className="flex gap-6 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
