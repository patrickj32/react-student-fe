//Bring in link from react-router-dom so we can link to the specific users
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList(props) {

    //Setup our initial state
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    //When component mounts (displays on the screen) make a fetch request to an API
    useEffect(() => {

        //get all the students when the component mounts on the screen
        getStudents();

    }, [])

    const getStudents = () => {
        //fetch request to the API that returns a promise object
        fetch("http://localhost:5000/api/students")
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((students) => {
                //update state with the data from the API causing the page to re-render
                setStudents(students);
                setLoading(false);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error.message)
            });
    }

    const deleteStudent = (event, studentId) => {
        event.preventDefault();
        fetch(`http://localhost:5000/api/students/${studentId}`, {
          method: "DELETE",
          // headers: {
          //   'content-type': 'application/json'
          // },
        })
          // .then((response) => response.json())
          .then(() => {
            // props.history.push("/students");
            getStudents();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };



    //using map, loop through the students in state that came back from the API and build an array of <li> elements
    //storing them in studentTableRows
    const studentTableRows = students.map((student, index) => {
        return (
            <tr key={index}>
                {/* 
                        Link to the student component with the specifc student id so we can get that student from
                        the api and display their data 
                    */}
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.major}</td>
                <td>{student.ip_address}</td>
                <td><Link to={`/student/${student.id}`}>View</Link>  </td>

                
                <Link to={`/student/${student.id}/update`}> Edit Student  </Link>
                <a onClick={(event) => deleteStudent(event,student.id)} href="#">Delete Student</a>
            </tr>
        );
    });

    //display data to the user
    //if we are still "loading" (getting the data from the API), display loading. 
    //otherwise, display the studentListItems generated above
    return (
        <section>
            <h2>Welcome to the directory of students:</h2>
            <Link to={`/student/create`}>Add Student</Link>
            <br></br>
            <br></br>

            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Major</th>
                        <th>IP Address</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <tr><td colSpan="6">Loading....</td></tr> : studentTableRows}
                </tbody>
            </table>
        </section>
    );
}

export default StudentList;