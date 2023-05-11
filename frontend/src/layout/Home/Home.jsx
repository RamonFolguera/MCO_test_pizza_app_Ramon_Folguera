import React, { useEffect, useState } from "react";
import { bringPizzas } from "../../services/apiCall";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Home = () => {
  const [allPizzas, setAllPizzas] = useState([]);

const dispatch = useDispatch()

  useEffect(() => {
    if (allPizzas.length === 0) {
      bringPizzas()
        .then((result) => {
          console.log(result.data.data);
          if (result.data.data.length === 0) {
            return;
          }
          setAllPizzas(result.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allPizzas]);

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
                      <Link
                        type="button"
                        to="/pizza-detail"
                        className="d-flex justify-content-center align-items-center mb-0 mt-3 seeMoreBtn"
                      >
                        Click for more details
                      </Link>
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
