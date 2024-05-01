import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

const Cardgroup = (props) => {

    let cardsready = props.cards.map((image, i) => {
        return <Card key={i} imgSrc={image.imgSrc} imgAlt={image.imgAlt} title={image.title} content={image.content} />
    });

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {cardsready}
        </div>
    );
}

Cardgroup.propTypes = {
    cards: PropTypes.array
}

export default Cardgroup;