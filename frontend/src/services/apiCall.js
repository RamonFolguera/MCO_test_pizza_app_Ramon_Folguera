import axios from "axios"

const root = 'http://127.0.0.1:8000/api/'


export const bringPizzas = async () => {
   
    return await axios.get(`${root}pizzas/`);
  }

  export const bringAllIngredients = async () => {
   
    return await axios.get(`${root}ingredients/`);
  }

  export const bringAllIngredientsNotInPizza = async (params) => {
   
    return await axios.get(`${root}ingredients-not-in-pizza/${params}`);
  }

  export const bringAllIngredient_pizzasByPizzaId = async (params) => {
   
    return await axios.get(`${root}ingredient-pizzas/${params}`);
  }



  export const addIngredient = async (params, body) => {

    return await axios.post(`${root}add-ingredient/${params}`, body);
  }

  export const deleteIngredient = async (params, body) => {
    const headers = {
      'Content-Type': 'application/json'
    };
    return await axios.delete(`${root}remove-ingredient/${params}`, { headers, data: body });
  }