import Layout from "@/components/Layout"

export default function NewProduct(){
    return (
        <Layout>
            <h1 className="text-2xl text-blue-900 mb-10">New Product</h1>
            <div className="flex flex-col">
                <input type="text" placeholder="Product name"/>
                <textarea placeholder="Description"></textarea>
            </div>
        </Layout>
    )
}