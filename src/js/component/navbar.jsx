import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    const textcolor = {
        white: "navbar navbar-dark",
        black: "navbar navbar-light",
        blue: "navbar"
    };
    if (textcolor[props.textcolor] === undefined) alert(`The color ${props.textcolor} is available.`);

    const bgcolor = {
        white: "bg-light",
        black: "bg-dark",
        blue: "bg-primary",
        green: "bg-success",
        red: "bg-danger",
        yellow: "bg-warning",
        gray: "bg-secondary"
    };
    if (bgcolor[props.bgcolor] === undefined) alert(`The color ${props.bgcolor} is available.`);

    return (
        <nav className={`${textcolor[props.textcolor]} ${bgcolor[props.bgcolor]} navbar-expand-lg sticky-top px-3`}>
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" aria-current="page" href="#">{props.firstitem}</a>
                        <a className="nav-link" href="#">{props.seconditem}</a>
                        <a className="nav-link" href="#">{props.thirditem}</a>
                        <a className="nav-link" href="#" >{props.fourthitem}</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    textcolor: PropTypes.string,
    bgcolor: PropTypes.string,
    firstitem: PropTypes.string,
    seconditem: PropTypes.string,
    thirditem: PropTypes.string,
    fourthitem: PropTypes.string
}

export default Navbar;