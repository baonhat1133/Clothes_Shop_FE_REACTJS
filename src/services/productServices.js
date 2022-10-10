import requestAxios from "../utils/http";
import {
  createPrdSuccess,
  createPrdStart,
  createPrdError,
  getAllProductSuccess,
  getAllProductStart,
  getAllProductError,
  updateProductSuccess,
  updateProductStart,
  updateProductError,
  deleteProductSuccess,
  deleteProductStart,
  deleteProductError,
} from "../redux/productSlice";
export let createProduct = async (inforProduct, dispatch) => {
  dispatch(createPrdStart());
  try {
    await requestAxios.post("product/createPrd", inforProduct);
    dispatch(createPrdSuccess());
  } catch (err) {
    dispatch(createPrdError());
  }
};

export let getAllProduct = async (dispatch) => {
  dispatch(getAllProductStart());
  try {
    let res = await requestAxios.get("product/getAllPrds");
    dispatch(getAllProductSuccess(res.data));
  } catch (err) {
    dispatch(getAllProductError());
  }
};

export let updateProduct = async (idProduct, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await requestAxios.put(`product/updateProduct/${idProduct}`, product);
    dispatch(updateProductSuccess());
  } catch (err) {
    dispatch(updateProductError());
  }
};

export let deleteProduct = async (idProduct, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await requestAxios.delete(`product/deleteProduct/${idProduct}`);
    dispatch(deleteProductSuccess());
  } catch (err) {
    dispatch(deleteProductError());
  }
};
