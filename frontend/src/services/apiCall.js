import axios from "axios"

const root = 'http://127.0.0.1:8000/api/'


export const bringPizzas = async () => {
   
    return await axios.get(`${root}pizzas/`);
  }