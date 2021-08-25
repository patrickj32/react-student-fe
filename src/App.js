import './App.css';

//Import router component
import { Switch, Route } from "react-router-dom";

//Import Navigation Component
import Navigation from "./components/navigation/Navigation";

//Import Welcome Component
import Welcome from "./components/welcome/Welcome";

//Import user related components
import StudentList from "./components/studentList/StudentList";
import Student from './components/student/Student';

//Import NoMath (404) Component
import NoMatch from "./components/noMatch/NoMatch";

function App() {
  return (
    <div className="App">
      {/* Header to display on every page */}
      <header>
        <h1>Welcome to React YOUniversity</h1>
        <Navigation />
      </header>

      {/* Define Routes to different components based on URL */}

      <Switch>
        <Route
          exact
          path="/"
          component={Welcome}
        />
        <Route
          exact
          path="/students"
          component={StudentList}
        />
        <Route
          path="/student/:id"
          component={Student}
        />
        <Route
          path="*"
          component={NoMatch}
        />
      </Switch>
    </div>
  );
}

export default App;
