import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
        <Link className="bg-blue-950 text-white px-2 py-1 rounded-xl" href={'/products/new'}>Add new product</Link>
    </Layout>
    );
}
