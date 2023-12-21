import React, { useState, useEffect } from "react";
import "../styles/Categories.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import axios from "axios";

import Dishes from "./Dishes.jsx";

function Categories() {
  const params = useParams();
  const [allDishes, setAllDishes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const drfUrl = 'http://localhost:8000/api/v1/';

  useEffect(() => {
    axios({
      method: "get",
      url: `${drfUrl}dishes/`,
    })
      .then((response) => {
        setAllDishes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${drfUrl}categories/${params.id}`,
    })
      .then((response) => {
        setCurrentCategory(response.data.name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  return (
    <React.Fragment>
      <h2>Блюда из категории: </h2>
      <h2 className="category-name">{currentCategory}</h2>
      <nav className="dishes">
        <ul>
          {allDishes.map((dish) => {
            if (dish.category == params.id) {
              return (
                <li key={dish.id}>
                  <Link to={"dishes/" + dish.id}>{dish.name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <Routes>
        <Route path="dishes/:id/" element={<Dishes />} />
      </Routes>
    </React.Fragment>
  );
}

export default Categories;
