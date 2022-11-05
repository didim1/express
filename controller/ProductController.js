import supabase from "../model/SupabaseClient.js";

//Get Product
export const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select();
    if (error) throw error;
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
};

//Get Product By ID
export const getProductById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", req.params.id);
    if (error) throw error;
    return res.json(data);
  } catch (error) {
    return res.json({ status: 404, msg: `data ${req.params.id} not found` });
  }
};

//Add Product
export const addProduct = async (req, res) => {
  try {
    const { error } = await supabase.from("products").insert([req.body]);
    if (error) throw error;
    return res.status(201).end();
  } catch (error) {
    return res.json({ status: 400, msg: "Bad Request" });
  }
};

//Update Product
export const updateProduct = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .update(req.body)
      .eq("id", req.params.id);

    if (error) throw error;
    return res.status(200).end();
  } catch (error) {
    return res.json(error);
  }
};

//Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", req.params.id);
    if (error) throw error;
    return res.status(200).end();
  } catch (error) {
    return res.json(error);
  }
};
