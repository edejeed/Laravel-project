import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/pages/auth/login";


const Index = () => {
    return(
        <div>
            <Login />
        </div>
    )
}

// export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Index />,
        document.getElementById("app")
    )
}