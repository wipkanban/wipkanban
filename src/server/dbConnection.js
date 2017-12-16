import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URI, { useMongoClient: true });
