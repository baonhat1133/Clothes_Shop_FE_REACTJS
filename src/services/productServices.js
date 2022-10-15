import requestAxiosNotToken from "../utils/http";

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
import {
  getAllOrderSuccess,
  getAllOrderError,
  createOrderSuccess,
  createOrderError,
  updateOrderSuccess,
  updateOrderError,
  getAllOrderAdminSuccess,
  getAllOrderAdminError,
} from "../redux/orderSlice";
export let createProduct = async (
  // accesstokenAd,
  inforProduct,
  dispatch,
  requestTokenAxios
) => {
  dispatch(createPrdStart());
  try {
    await requestTokenAxios({
      url: "product/createPrd",
      method: "post",
      // headers: {
      //   token: `Bearer ${accesstokenAd}`,
      // },
      data: inforProduct,
    });
    dispatch(createPrdSuccess());
  } catch (err) {
    dispatch(createPrdError());
  }
};

export let getAllProduct = async (dispatch) => {
  dispatch(getAllProductStart());
  try {
    let res = await requestAxiosNotToken.get("product/getAllPrds");
    dispatch(getAllProductSuccess(res.data));
  } catch (err) {
    dispatch(getAllProductError());
  }
};

export let updateProduct = async (
  idProduct,
  accesstokenAd,
  product,
  dispatch,
  requestTokenAxios
) => {
  dispatch(updateProductStart());
  try {
    await requestTokenAxios.put(`product/updateProduct/${idProduct}`, product);
    dispatch(updateProductSuccess());
  } catch (err) {
    dispatch(updateProductError());
  }
};
//requestAxiosNotToken requestTokenAxios
export let deleteProduct = async (
  idProduct,
  accesstokenAd,
  dispatch,
  requestTokenAxios
) => {
  dispatch(deleteProductStart());
  try {
    await requestTokenAxios.delete(
      `product/deleteProduct/${idProduct}`
      //  {
      //   headers: { token: `Bearer ${accesstokenAd}` },
      // }
    );
    // await requestTokenAxios({
    //   url: `product/deleteProduct/${idProduct}`,
    //   method: "delete",
    // });

    dispatch(deleteProductSuccess());
  } catch (err) {
    dispatch(deleteProductError());
  }
};

/*  ORDER ====================================================================*/
export let createOrder = async (orderInfor, dispatch, requestTokenAxios) => {
  try {
    await requestTokenAxios.post("product/createOrder", orderInfor);
    dispatch(createOrderSuccess());
  } catch (err) {
    dispatch(createOrderError());
  }
};

export let getAllOrder = async (user_id, dispatch) => {
  try {
    if (user_id === "All") {
      let res = await requestAxiosNotToken.get(`product/getAllOrder/All`);
      dispatch(getAllOrderAdminSuccess(res.data));
    } else {
      let res = await requestAxiosNotToken.get(
        `product/getAllOrder/${user_id}`
      );
      dispatch(getAllOrderSuccess(res.data));
    }
  } catch (err) {
    if (user_id === "All") {
      dispatch(getAllOrderAdminError());
    } else {
      dispatch(getAllOrderError());
    }
  }
};

export let updateOrder = async (
  user_id,
  orderInfor,
  dispatch,
  requestTokenAxios
) => {
  try {
    await requestTokenAxios.put(`product/updateOrder/${user_id}`, orderInfor);
    dispatch(updateOrderSuccess());
  } catch (err) {
    dispatch(updateOrderError());
  }
};
export let updateOrderAdmin = async (
  user_id,
  orderInfor,
  dispatch,
  requestTokenAxios
) => {
  try {
    await requestTokenAxios.put(
      `product/updateOrderAdmin/${user_id}`,
      orderInfor
    );
    dispatch(updateOrderSuccess());
  } catch (err) {
    dispatch(updateOrderError());
  }
};
