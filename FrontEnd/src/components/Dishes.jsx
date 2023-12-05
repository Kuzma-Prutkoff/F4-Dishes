import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Dishes.css";

function Dishes() {
  const params = useParams();
  const [dish, setDish] = React.useState({});
  React.useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/dishes/${params.id}`,
    })
      .then((response) => {
        setDish(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  return (
    <React.Fragment>
      <div className="recipy-container">
        <div>Блюдо:</div>
        <div className="dish-name">{dish.name}</div>
        <div>Рецепт:</div>
        <div className="recipy-name">{dish.description}</div>
        <img src={dish.photo} alt="Изображение недоступно" />
      </div>
    </React.Fragment>
  );
}

export default Dishes;