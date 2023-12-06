import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GuitarList(props) {
  const [loading, setLoading] = useState(true);
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    getGuitars();
  }, []);

  const getGuitars = () => {
    fetch("http://localhost:5000/api/guitars")
      .then((response) => response.json())
      .then((guitars) => {
        setGuitars(guitars);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const guitarTableRows = guitars.map((guitar, index) => (
    <tr key={index}>
      <td>{guitar.id}</td>
      <td>{guitar.brand}</td>
      <td>{guitar.model}</td>
      <td>{guitar.color}</td>
      <td>${guitar.price}</td>
      <td>{guitar.quantity}</td>
      <td><Link to={`/guitars/${guitar.id}`}>View</Link></td>
    </tr>
  ));

  return (
    <section>
      <h2>Welcome to the directory of guitars:</h2>
      <Link to={`/guitars/create`}>Add Guitar</Link>
      <br></br>
      <br></br>

      <table>
        <thead>
          <tr>
            <th>Guitar ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td colSpan="6">Loading....</td></tr> : guitarTableRows}
        </tbody>
      </table>
    </section>
  );
}

export default GuitarList;