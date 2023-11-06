import Layout from "@/components/Layout"

export default function NewProduct(){
    return (
        <Layout>
            <h1>New Product</h1>
            <div className="flex flex-col">
                <label>Product Name</label>
                <input type="text" placeholder="Product name"/>
                <label>Description</label>
                <textarea placeholder="Description"></textarea>
                <label>Price (USD)</label>
                <input type="text" placeholder="Price"/>
                <button className="btn-primary">Save</button>
            </div>
        </Layout>
    )
}