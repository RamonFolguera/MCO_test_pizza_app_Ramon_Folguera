import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { detailsData } from "../detailsSlice";
import {
  addIngredient,
  bringAllIngredient_pizzasByPizzaId,
  bringAllIngredients,
  bringAllIngredientsNotInPizza,
  bringPizzas,
  deleteIngredient,
} from "../../services/apiCall";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ModalTemplate } from "../../components/ModalTemplate/ModalTemplate";
import "./PizzaInDetail.css";

export const PizzaInDetail = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [
    allIngredientsNotInSelectedPizza,
    setAllIngredientsNotInSelectedPizza,
  ] = useState([]);
  const [allIngredientsInSelectedPizza, setAllIngredientsInSelectedPizza] =
    useState([]);
  const [allIngredient_pizzasByPizzaId, setAllIngredient_pizzasByPizzaId] =
    useState([]);
  const [pizzaSelected, setPizzaSelected] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);

  const [addedIngredient, setAddedIngredient] = useState({
    ingredient_id: "",
  });
  const [removedIngredient, setRemovedIngredient] = useState({
    ingredient_id: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const pizzaDetailsRedux = useSelector(detailsData);
  const selectedPizza = pizzaDetailsRedux.choosenPizza;
  const ingredient_pizzaSelected = selectedPizza.ingredient_pizzas;


  const inputHandler = (e) => {
    setAddedIngredient((prevState) => ({
      ...prevState,
      [e.target.name]: parseInt(e.target.value),
    }));
  };

  useEffect(() => {
    if (allPizzas.length === 0) {
      bringPizzas()
        .then((result) => {
          if (result.data.data.length === 0) {
            return;
          }
      
          const myPizza = result.data.data.find(
            (pizza) => pizza.id === selectedPizza.id
          );
          setPizzaSelected(myPizza);
          
        })
        .catch((error) => console.log(error));
    }
  }, [allPizzas]);


  useEffect(() => {
    if (allIngredients.length === 0) {
      bringAllIngredients()
        .then((result) => {
        

          if (result.data.data.length === 0) {
            return;
          }

          setAllIngredients(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredients]);



  useEffect(() => {
    if (allIngredientsNotInSelectedPizza.length === 0) {
      bringAllIngredientsNotInPizza(selectedPizza.id)
        .then((result) => {
        
          if (result.data.data.length === 0) {
            return;
          }
          setAllIngredientsNotInSelectedPizza(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredientsNotInSelectedPizza]);

  useEffect(() => {
    if (allIngredient_pizzasByPizzaId.length === 0) {
      bringAllIngredient_pizzasByPizzaId(selectedPizza.id)
        .then((result) => {
  
          if (result.data.data.length === 0) {
            return;
          }
          let ingredientsInSelectedPizza = [];
          allIngredients.map((ingredient) => {
            result.data.data.map((ingredientInPizza) => {
              if (ingredient.id === ingredientInPizza.ingredient_id) {
                ingredientsInSelectedPizza.push(ingredient);
              }
            });
          });

          setAllIngredientsInSelectedPizza(ingredientsInSelectedPizza);

          setAllIngredient_pizzasByPizzaId(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredients, allIngredient_pizzasByPizzaId]);


  const handleModalClick = (ingredient) => {
    handleShowModal();
    setRemovedIngredient(ingredient);
  };

  const addNewIngredient = () => {
    addIngredient(selectedPizza.id, {
      ingredient_id: addedIngredient.ingredient_id,
    })
      .then((response) => {

        setAllIngredient_pizzasByPizzaId((prevState) => [
          ...prevState,
          {
            id: response.data.data.id,
            pizza_id: selectedPizza.id,
            ingredient_id: addedIngredient.ingredient_id,
          },
          setAllIngredientsInSelectedPizza((prevState) => [
            ...prevState,
            allIngredients.find(
              (ingredient) => ingredient.id === addedIngredient.ingredient_id
            ),
          ]),
        ]);
        bringPizzas()
        .then((result) => {
          const updatedPizza = result.data.data.find(
            (pizza) => pizza.id === selectedPizza.id
          );
          setPizzaSelected(updatedPizza);
        })
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const removeIngredient = () => {

    handleCloseModal();
    deleteIngredient(selectedPizza.id, {
      ingredient_id: removedIngredient.id,
    })
      .then((response) => {
        console.log(response);

        setAllIngredientsInSelectedPizza((prevState) =>
          prevState.filter(
            (ingredient) => ingredient.id !== removedIngredient.id
          )
        );

        bringPizzas()
        .then((result) => {
          const updatedPizza = result.data.data.find(
            (pizza) => pizza.id === selectedPizza.id
          );
          setPizzaSelected(updatedPizza);
        })
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row className="">
        <Col lg={4}  xs={12} className="defaultHeight d-flex flex-column justify-content-center align-items-center">
          {showModal && (
            <div className="modalContainer">
              <ModalTemplate
                key="ingredientsModal"
                className="ingredientsModalDesign"
                title="Please, confirm"
                body="Are you sure you want to remove this ingredient?."
                button1="Close"
                button2="Yes, remove."
                clickFunction1={() => handleCloseModal()}
                clickFunction2={() => removeIngredient()}
              />
            </div>
          )}
        

          <img
            className="selectedImg"
            src={`http://localhost:8000/storage/img/${selectedPizza.image}`}
            alt=""
          />
        </Col>

        <Col xs={12} lg={4} className="defaultHeight pt-5 ingredientsList ">
          <div>
          <p className="me-2 pizzaSelectedNamefield">PIZZA {pizzaSelected.name}</p>
        </div>
        <div>
          {selectedPizza &&
            allIngredientsInSelectedPizza.map((ingredient) => {
              return (
                <div key={ingredient.id}>
                  <div className="d-flex justify-content-between w-75">
                    <p className="me-5">{ingredient.name} </p>
                    <div
                      className="deleteBtn"
                      type="button"
                      onClick={() => handleModalClick(ingredient)}
                    >
                      REMOVE
                    </div>
                  </div>
                </div>
                
              );
            })}
             </div>
       
        </Col>
        <Col lg={4} xs={12} className="defaultHeight pt-5 d-flex flex-column justify-content-between">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <p className="pe-4 nameFieldDesign ps-3">LIST OF INGREDIENTS</p>
              <Form.Select
                className="selectCategoryDesign"
                name={"ingredient_id"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
              >
                <option>Choose Ingredient to Add</option>

                {allIngredientsNotInSelectedPizza.map((ingredient) => {
                  return (
                    <option key={ingredient.id} value={ingredient.id}>
                      {ingredient.name}
                      {ingredient.ingredient_price}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>

          <div 
          className="addBtn"
          type="button" onClick={() => addNewIngredient()}>
            ADD
          </div>
          </div>
          <div>
        <p className="me-2 namefield">TOTAL PRICE: <span className="priceDesign">{pizzaSelected.pizza_price}</span> eur</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
