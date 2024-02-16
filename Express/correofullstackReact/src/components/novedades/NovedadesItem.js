import React from 'react';

const NovedadItem = (props) => {
    const { name, size, imagen, description } = props;
    return (
        <div className="novedades">
            <h1>{name}</h1>
            <h2>{size}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: description }} />   
            <hr />
        </div>
    );
}
export default NovedadItem;