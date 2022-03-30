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

export const getLotterrysConcurse = (setLotterysConcurse) => {
 axios.get(`${BASE_URL}loterias-concursos`)
  .then((res) => {
   setLotterysConcurse(res.data)
  })
  .catch((err) => {
   console.log(err.message)
  })
}

export const getLotteryDetail = (setLoteryDetail, id) => {
 axios.get(`${BASE_URL}concursos/${id}`)
  .then((res) => {
   setLoteryDetail(res.data)
  })
  .catch((err) => {
   console.log(err.message)
  })
}