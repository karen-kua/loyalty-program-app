import axios from "axios";

export default {

  logIn: loginData => {
    return axios.post("/users/logIn", loginData)
  },

  getBalance: reqObj => {
    return axios.get("/api/info/balance/" + reqObj.id,
    {headers: {"Authorization" : `Bearer ${reqObj.token}`}}
  )},

  getInventory: token => {
    return axios.get("/api/info/inventory/",
    {headers: {"Authorization" : `Bearer ${token}`}}
  )},

  showItemQty: reqObj => {
    return axios.get("/api/info/inventory/" + reqObj.colour,
    {headers: {"Authorization" : `Bearer ${reqObj.token}`}}
  )}

};

