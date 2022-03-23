import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getLotterys = (setLoterrys) => {
 axios.get(`${BASE_URL}loterias`)
  .then((res) => {
   setLoterrys(res.data)
  })
  .catch((err) => {
   console.log(err.message)
  });
};
