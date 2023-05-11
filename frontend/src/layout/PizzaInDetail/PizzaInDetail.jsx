import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { detailsData } from '../detailsSlice'
import { bringAllIngredients, bringAllIngredientsNotInPizza } from '../../services/apiCall';

export const PizzaInDetail = () => {


  const [allIngredients, setAllIngredients] =useState([]);
  const [allIngredientsNotInSelectedPizza, setAllIngredientsNotInSelectedPizza] = useState([]);
  const [allIngredientsInSelectedPizza, setAllIngredientsInSelectedPizza] = useState([]);

  const pizzaDetailsRedux = useSelector(detailsData);
  const selectedPizza = pizzaDetailsRedux.choosenPizza;
  const ingredient_pizzaSelected = selectedPizza.ingredient_pizzas;
 
console.log(ingredient_pizzaSelected);

  useEffect(()=>{
    if (allIngredients.length === 0) {
      bringAllIngredients()
        .then((result) => {
          console.log(result,"allIngredients");

          if (result.data.data.length === 0) {
            return;
          }

         let ingredientsInSelectedPizza = [];
          result.data.data.map((ingredient) => {
            ingredient_pizzaSelected.map((ingredientInPizza) => {
                if(ingredient.id === ingredientInPizza.ingredient_id) {
                  ingredientsInSelectedPizza.push(ingredient)
                }
             })
          })
          setAllIngredientsInSelectedPizza(ingredientsInSelectedPizza)


          setAllIngredients(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredients]);


console.log(allIngredientsInSelectedPizza);

  useEffect(()=>{
    if (allIngredientsNotInSelectedPizza.length === 0) {
      bringAllIngredientsNotInPizza(selectedPizza.id)
        .then((result) => {
console.log(result,"allIngredientsNotInSelectedPizza");
          if (result.data.data.length === 0) {
            return;
          }
          setAllIngredientsNotInSelectedPizza(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredientsNotInSelectedPizza]);



  return (
    <div className="defaultHeight">
      

      {selectedPizza.name}
      {selectedPizza.pizza_price}
    
      <img
                        src={`http://localhost:8000/storage/img/${selectedPizza.image}`}
                        alt=""
                      />
{selectedPizza && allIngredientsInSelectedPizza.map((ingredient) => {
  return(
    <div key={ingredient.id}> 
    <p>{ingredient.name} </p>
    </div>
   )
})}


    </div>
  )
}


