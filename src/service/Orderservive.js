import axios from "axios";

const API_URL= "http://localhost:8080";

class OrderService{
    saveOrder(order){
        return axios.post(API_URL+"/saveOrder", order);
    }

    getALLOrders(){
        return axios.get(API_URL+"/");
    }

    getOrderById(id){
        return axios.get(API_URL+"/"+id);
    }
}
export default new OrderService;