import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    preco: { type: Number },
  },
  { versionKey: false }
);

const produto = mongoose.model("produtos", produtoSchema);
export default produto;
