import "./App.css";

//Import router component
import { Switch, Route } from "react-router-dom";

//Import Navigation Component
import Navigation from "./components/navigation/Navigation";

//Import Welcome Component
import Welcome from "./components/welcome/Welcome";

//Import user related components
import StudentList from "./components/studentList/StudentList";
import Student from "./components/student/Student";

//Import NoMath (404) Component
import NoMatch from "./components/noMatch/NoMatch";

import AddStudent from "./components/addStudent/AddStudent";

// Import guitar components
import GuitarList from "./components/guitarList/GuitarList";
import Guitar from "./components/guitar/Guitar";
import AddGuitar from "./components/addGuitar/AddGuitar";
import EditGuitar from "./components/editGuitar/EditGuitar";
import EditStudent from "./components/editStudent/EditStudent"

function App() {
  return (
    <div className="App">
      {/* Header to display on every page */}
      <header>
        <h1>Welcome to React YOUniversity...and guitar stuff too</h1>
        <Navigation />
      </header>

      {/* Define Routes to different components based on URL */}

      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/students" component={StudentList} />
        <Route path="/student/create" component={AddStudent} />
        <Route exact path="/student/:id" component={Student} />
        <Route exact path="/student/:id/update" component={EditStudent} />


        
        {/* Add guitar routes */}
        <Route exact path="/guitars" component={GuitarList} />
        <Route path="/guitars/create" component={AddGuitar} />
        <Route exact path="/guitars/:id" component={Guitar} />
        <Route exact path="/guitars/:id/update" component={EditGuitar} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
