import { useState } from "react";

function AddGuitar(props) {

  const [guitar, setGuitar] = useState({
    brand: "",
    model: "",
    color: "",
    price: 0,
    quantity: 0
  });

  const handleChange = (event) => {
    guitar[event.target.name] = event.target.value;
    setGuitar({ ...guitar });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/api/guitars", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(guitar)
    })
      .then((response) => response.json())
      .then((newGuitar) => {
        console.log(newGuitar);
        props.history.push("/guitars");
      });
  };

  return (
    <div className="AddGuitar">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input
            onChange={handleChange}
            type="text"
            name="brand"
            value={guitar.brand}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            onChange={handleChange}
            type="text"
            name="model"
            value={guitar.model}
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={guitar.color}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            value={guitar.price}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            onChange={handleChange}
            type="number"
            name="quantity"
            value={guitar.quantity}
          />
        </div>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddGuitar;
