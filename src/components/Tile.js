import React from 'react';

const Tile = (props) => (
    <div className="wrapper tile" 
        id={props.id}
        onClick={(event) => props.onClick(event, props)}
    ></div>
);

export default Tile;