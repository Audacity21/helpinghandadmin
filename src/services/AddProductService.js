import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/products";

class AddProductService {
    saveProduct(product) {
        return axios.post(USER_API_BASE_URL, product);
    }
}

export default new AddProductService();