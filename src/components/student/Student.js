import { useEffect, useState } from "react";

function Student(props) {

    const [student, setStudent] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        major: "",
        ip_address: ""
    });

    //when the component mounts (displays on screen) get the student from the API
    useEffect(() => {

        //get the student's id from the URL to make the API call
        const id = props.match.params.id;

        getStudent(id)


    }, [])

    const getStudent = (studentId) => {
        //use fetch to make an API call and get a specific student (returns a promise)
        fetch(`http://localhost:5000/api/students/${studentId}`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((student) => {


                //update state with the data from the API causing the page to re-render
                setStudent({
                    ...student
                });
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }


    //display the student data that is in state
    return (
        <section>
            <h1>{student.first_name} {student.last_name}'s Details</h1>
            <h2>This is student #{student.id}</h2>
            <div>Email: {student.email}</div>
            <div>Major: {student.major}</div>
            <div>IP Address: {student.ip_address}</div>
        </section>
    );
}

export default Student;