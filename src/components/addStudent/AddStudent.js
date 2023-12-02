import { useState } from "react";

function AddStudent(props) {

    const [student, setStudent] = useState({
        first_name: "",
        last_name: "",
        email: "",
        major: "",
        ip_address: ""
    });

    const handleChange = (event) => {

        student[event.target.name] = event.target.value

        setStudent({ ...student })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:5000/api/students", {
            method: "POST",
            headers: {
                'content-type': 'application/json' //make sure we set the content-type headers so the API knows it is recieveing JSON data
            },
            body: JSON.stringify(student)
        })
        .then((response) => response.json())
        .then((newStudent) => {

            console.log(newStudent)
            props.history.push("/students")

        })
    }

    return (
        <div className="AddStudent">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input onChange={handleChange} type="text" name="first_name" value={student.first_name} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input onChange={handleChange} type="text" name="last_name" value={student.last_name} />
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={handleChange} type="text" name="email" value={student.email} />
                </div>
                <div>
                    <label>Major:</label>
                    <input onChange={handleChange} type="text" name="major" value={student.major} />
                </div>
                <div>
                    <label>IP Address:</label>
                    <input onChange={handleChange} type="text" name="ip_address" value={student.ip_address} />
                </div>
                <br></br>
                <br></br>

                <button>Submit</button>
            </form>
        </div>

    );
}

export default AddStudent