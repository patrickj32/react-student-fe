import React, { Component } from "react";

//Bring in link from react-router-dom so we can link to the specific users
import { Link } from "react-router-dom";

class StudentList extends Component {

    //Setup our initial state
    state = {
        loading: true,
        students: [],
    };

    //When component mounts (displays on the screen) make a fetch request to an API
    componentDidMount() {

        this.getStudents()
        
    }

    getStudents = () => {
        //fetch request to the API that returns a promise object
        fetch("http://localhost:5000/api/students")
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                //update state with the data from the API causing the page to re-render
                this.setState({
                    students: data,
                    loading: false
                });
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error.message)
            });
    }

    render() {

        //using map, loop through the students in state that came back from the API and build an array of <li> elements
        //storing them in studentListItems 
        const studentListItems = this.state.students.map((student, index) => {
            return (
                <li key={index}>
                    {/* 
                        Link to the student component with the specifc student id so we can get that student from
                        the api and display their data 
                    */}
                    <Link to={`/student/${student.id}`}>{student.last_name}, {student.first_name}</Link>
                </li>
            );
        });

        //display data to the user
        //if we are still "loading" (getting the data from the API), display loading. 
        //otherwise, display the studentListItems generated above
        return (
            <section>
                <h2>Welcome to the directory of students:</h2>
                {this.state.loading ? <h2>Loading...</h2> : <ul>{studentListItems}</ul>}
            </section>
        );
    }
}

export default StudentList;