import React, { useEffect, useState } from "react";
import { bringPizzas } from "../../services/apiCall";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { useDispatch } from "react-redux";
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent";
import { addChoosenPizza } from '../detailsSlice'
import { useNavigate } from "react-router";


export const Home = () => {

  const [allPizzas, setAllPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

const navigate = useNavigate();
const dispatch = useDispatch();

  useEffect(() => {
    if (allPizzas.length === 0) {
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

const goToPizzaSelected = (pizza) => {

  dispatch(addChoosenPizza({ choosenPizza: pizza }))

  setTimeout(() => {
    navigate('/pizza-detail')
  }, 500)
}


if (loading) {
  return (
    <div className="defaultHeight spinnerDesign d-flex justify-content-center align-items-center flex-column">
      <SpinnerComponent message="Pizzas in the oven... hold on!" />
    </div>
  )
} else if (allPizzas.length > 0) {
  return (
    <>
      <Container fluid className="d-flex justify-content-center flex-wrap">
        <Row className="w-75 mt-5 mb-5">
          {allPizzas.map((pizza) => {
            return (
              <Col
                lg={4}
                xs={12}
                key={pizza.id}
                className="d-flex justify-content-between "
              >
                <div className="cardContainer  mt-3 mb-3 pb-3">
                 
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="d-flex justify-content-between flex-column">
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <p className="me-2 titlefield">NAME</p>

                          <p className="me-2 namefield">{pizza.name}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3 fieldContainer">
                          <p className="me-2 titlefield">PRICE</p>

                          <p className="me-2 namefield">{pizza.pizza_price} eur</p>
                        </div>
                      </div>
                      <img
                        src={`http://localhost:8000/storage/img/${pizza.image}`}
                        alt=""
                      />
                      <div
                        type="button"
                        onClick = {() => goToPizzaSelected(pizza)}
                        className="d-flex justify-content-center align-items-center mb-0 mt-3 seeMoreBtn"
                      >
                        Click for more details
                      </div>
                    </div>
                
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
}