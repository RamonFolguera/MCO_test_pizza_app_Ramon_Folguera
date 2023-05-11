import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { detailsData } from "../detailsSlice";
import {
  bringAllIngredients,
  bringAllIngredientsNotInPizza,
} from "../../services/apiCall";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ModalTemplate } from "../../components/ModalTemplate/ModalTemplate";
import './PizzaInDetail.css'

export const PizzaInDetail = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [
    allIngredientsNotInSelectedPizza,
    setAllIngredientsNotInSelectedPizza,
  ] = useState([]);
  const [allIngredientsInSelectedPizza, setAllIngredientsInSelectedPizza] =
    useState([]);

  const [addedIngredient, setAddedIngredient] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const pizzaDetailsRedux = useSelector(detailsData);
  const selectedPizza = pizzaDetailsRedux.choosenPizza;
  const ingredient_pizzaSelected = selectedPizza.ingredient_pizzas;

  console.log(ingredient_pizzaSelected);

  useEffect(() => {
    if (allIngredients.length === 0) {
      bringAllIngredients()
        .then((result) => {
          console.log(result, "allIngredients");

          if (result.data.data.length === 0) {
            return;
          }

          let ingredientsInSelectedPizza = [];
          result.data.data.map((ingredient) => {
            ingredient_pizzaSelected.map((ingredientInPizza) => {
              if (ingredient.id === ingredientInPizza.ingredient_id) {
                ingredientsInSelectedPizza.push(ingredient);
              }
            });
          });
          setAllIngredientsInSelectedPizza(ingredientsInSelectedPizza);

          setAllIngredients(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredients]);

  console.log(allIngredientsInSelectedPizza);

  useEffect(() => {
    if (allIngredientsNotInSelectedPizza.length === 0) {
      bringAllIngredientsNotInPizza(selectedPizza.id)
        .then((result) => {
          console.log(result, "allIngredientsNotInSelectedPizza");
          if (result.data.data.length === 0) {
            return;
          }
          setAllIngredientsNotInSelectedPizza(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allIngredientsNotInSelectedPizza]);


const addNewIngredient = () =>{

}

const removeIngredient = () =>{
  
}

  return (
    <Container>
      <Row>
        <Col className="defaultHeight">
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
                handleShowModal
              />
            </div>
          )}
          {selectedPizza.name}
          {selectedPizza.pizza_price}

          <img
            src={`http://localhost:8000/storage/img/${selectedPizza.image}`}
            alt=""
          />
          {selectedPizza &&
            allIngredientsInSelectedPizza.map((ingredient) => {
              return (
                <div key={ingredient.id}>
                  <div className="d-flex">
                    <p className="me-5">{ingredient.name} </p>
                    <div type="button" onClick={() => handleShowModal()}>
                      REMOVE
                    </div>
                  </div>
                </div>
              );
            })}
        </Col>
        <Col>
     
          <Form>
            <Form.Group className="mb-3">
              <p className="pe-4 nameFieldDesign ps-3">CATEGORY</p>
              <Form.Select
                className="selectCategoryDesign"
                name={"allIngredientsNotInSelectedPizza"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
              >
                <option>Choose Ingredient to Add</option>

                {allIngredientsNotInSelectedPizza.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                      {category.ingredient_price}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>
          <div type="button" onClick={() => addNewIngredient()}>
            ADD
          </div>
        </Col>
      </Row>
    </Container>
  );
};
