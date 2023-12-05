import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";

import Dishes from "./Dishes.jsx";
import Categories from "./Categories.jsx";


function Home() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/v1/categories/",
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <React.Fragment>
      <nav className="categories">
        <div className="documents">
          <Link to={""}>Home</Link>
          <a href="http://localhost:8000/swagger" target="_blank">
            Swagger
          </a>
          <a href="http://localhost:8000/documents" target="_blank">
            Documents
          </a>
          <a href="http://localhost:8000/api/v1" target="_blank">
            D-Rest-F
          </a>
        </div>
        {categories.map((cat) => {
          return (
            <Link key={cat.id} to={"categories/" + cat.id}>
              {cat.name}
            </Link>
          );
        })}
      </nav>

      <Routes>
        <Route path="*" element={null} />
        <Route path="categories/:id/*" element={<Categories />} />
        <Route path="categories/:id/dishes/:id" element={<Dishes />} />
      </Routes>
    </React.Fragment>
  );
}

export default Home;