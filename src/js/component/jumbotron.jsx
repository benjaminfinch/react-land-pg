import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron mb-4 py-5 px-4 bg-secondary bg-opacity-25 rounded">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.content}</p>
            <a href={props.buttonUrl} target="_blank" className="btn btn-warning text-light btn-lg">
                {props.buttonContent}
            </a>
        </div>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonContent: PropTypes.string
}
export default Jumbotron;