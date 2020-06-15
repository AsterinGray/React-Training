// export default {
//   getAllProducts: "http://54.254.216.77:8082/api/v1/products",
// };

export const routeList = {
  getAllProducts: "http://54.254.216.77:8082/api/v1/products",
  getProductById: (id) => `http://54.254.216.77:8082/api/v1/products/${id}`,
  createProductType: `http://54.254.216.77:8082/api/v1/product-type`,
};
