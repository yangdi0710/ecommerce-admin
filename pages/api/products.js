import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

export default function handle(req, res) {
    const {method} = req;
    mongoose.Promise = clientPromise
    if(method === 'POST') {
        const {title, description, price} = req.body;
        Promise.create({
            title, description, price
        })
        res.json('post')
    }
}