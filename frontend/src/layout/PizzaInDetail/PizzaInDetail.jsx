import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { detailsData } from '../detailsSlice'

export const PizzaInDetail = () => {


  const [allIngredients, setAllIngredients] =useState([]);
  const [allIngredientsNotInSelectedPizza, setAllIngredientsNotInSelectedPizza] = useState([]);


  useEffect(()=>{
    if (allIngredients.length === 0) {
      bringPizzas()
        .then((result) => {
          setLoading(false)


          if (result.data.data.length === 0) {
            return;
          }
          setAllPizzas(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allPizzas]);

const pizzaDetailsRedux = useSelector(detailsData)
const selectedPizza = pizzaDetailsRedux.choosenPizza
const ingredientsInSelectedPizza = selectedPizza.ingredient_pizzas
console.log(ingredientsInSelectedPizza);

  return (
    <div className="defaultHeight">
      

      {selectedPizza.name}
      {selectedPizza.pizza_price}
    
      <img
                        src={`http://localhost:8000/storage/img/${selectedPizza.image}`}
                        alt=""
                      />
{selectedPizza && ingredientsInSelectedPizza.map((ingredient) => {
  return(
    <div key={ingredient.id}> 
    <p>{ingredient.name} </p>
    </div>
   )
})}


    </div>
  )
}


