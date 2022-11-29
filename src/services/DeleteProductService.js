import axios from "axios";

class DeleteProductService {
  deleteProduct(id) {
    return axios.delete(`http://localhost:8080/api/products/${id}`);
  }
}

export default new DeleteProductService();
