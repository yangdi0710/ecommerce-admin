import mongoose, { connect } from "mongoose";

export function mongooseConnect() {
  if (mongoose.connect.readyState === 1) {
    mongoose.connect.asPromise;
  } else {
    const uri = process.env.MONGODB_URI;
    mongoose.connect(uri);
  }
}
