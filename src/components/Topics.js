import React from "react";
import { NavLink } from "react-router-dom"; 

function Topics()
{
    return(
        <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/cs">Computer Science</NavLink>
        </div>
    );
}

export default Topics;