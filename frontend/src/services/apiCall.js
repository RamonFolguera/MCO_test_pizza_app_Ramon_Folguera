import axios from "axios"

const root = 'http://127.0.0.1:8000/api/'


export const bringPizzas = async () => {
   
    return await axios.get(`${root}pizzas/`);
  }

  export const bringAllIngredients = async () => {
   
    return await axios.get(`${root}ingredients/`);
  }

  export const bringAllIngredientsNotInPizza = async (params) => {
   
    return await axios.get(`${root}/ingredients-not-in-pizza/${params}`);
  }

  export const addIngredient = async (params, body) => {
   
    return await axios.get(`${root}add-ingredient/${params}`, body);
  }

  export const deleteIngredient = async (params, body) => {
   
    return await axios.get(`${root}remove-ingredient/${params}`, body);
  }