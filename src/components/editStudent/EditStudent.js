import { useState, useEffect } from "react";

function EditStudent(props) {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    grade: "",
    // Add other student-related fields as needed
  });

  useEffect(() => {
    const id = props.match.params.id;
    getStudent(id);
  }, []);

  const getStudent = (studentId) => {
    fetch(`http://localhost:5000/api/students/${studentId}`)
      .then((response) => response.json())
      .then((student) => {
        setStudent({
          ...student,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/api/students/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(student)
    })
      .then((response) => response.json())
      .then((newStudent) => {
        console.log(newStudent);
        props.history.push("/students");
      });
  };

  return (
    <div className="EditStudent">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={student.firstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={student.lastName}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            onChange={handleChange}
            type="number"
            name="age"
            value={student.age}
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            onChange={handleChange}
            type="text"
            name="grade"
            value={student.grade}
          />
        </div>
        {/* Add other input fields as needed */}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditStudent;
