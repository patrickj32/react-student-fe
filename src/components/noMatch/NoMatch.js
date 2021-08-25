
const NoMatch = (props) => {

    return (
        <div>
            <h3>404 Page Not Found: No match for the path {props.location.pathname}</h3>
        </div>
    );

}

export default NoMatch;