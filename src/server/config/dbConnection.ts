import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URI as string,{ useNewUrlParser: true });
