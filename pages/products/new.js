import Layout from "@/components/Layout"

export default function NewProduct(){
    return (
        <Layout>
            <h1>New Product</h1>
            <div className="flex flex-col">
                <input type="text" placeholder="Product name"/>
                <textarea placeholder="Description"></textarea>
            </div>
        </Layout>
    )
}