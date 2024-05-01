import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <div className="d-flex p-4 align-items-center bg-dark text-secondary text-center">
            <div className="m-auto">{props.content}</div>
        </div>
    );
}

Footer.propTypes = {
    content: PropTypes.string
}

export default Footer;