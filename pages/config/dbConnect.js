import mongoose from "mongoose";

async function conectarNaDataBase() {
  mongoose.connect(
    "mongodb+srv://carolinadsoliveira:1234@cluster0.qb2bp.mongodb.net/estoque?retryWrites=true&w=majority&appName=Cluster0"
  );
  return mongoose.connection;
}

export default conectarNaDataBase;
