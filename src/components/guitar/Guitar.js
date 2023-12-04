import { useEffect, useState } from "react";

function Guitar(props) {
  const [guitar, setGuitar] = useState({
    id: "",
    brand: "",
    model: "",
    color: "",
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    const id = props.match.params.id;
    getGuitar(id);
  }, []);

  const getGuitar = (guitarId) => {
    fetch(`http://localhost:5000/api/guitars/${guitarId}`)
      .then((response) => response.json())
      .then((guitar) => {
        setGuitar({
          ...guitar,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <h1>
        {guitar.brand} {guitar.model}'s Details
      </h1>
      <h2>This is guitar #{guitar.id}</h2>
      <div>Color: {guitar.color}</div>
      <div>Price: ${guitar.price}</div>
      <div>Quantity: {guitar.quantity}</div>
    </section>
  );
}

export default Guitar;
