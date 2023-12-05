import React from "react";
import "../styles/Categories.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import axios from "axios";

import Dishes from "./Dishes.jsx";

function Categories() {
  const params = useParams();
  const [allDishes, setAllDishes] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState();

  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/v1/dishes/",
    })
      .then((response) => {
        setAllDishes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/categories/${params.id}`,
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
