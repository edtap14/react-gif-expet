import React from 'react';

const GifGridItem = ({id, title, url}) => {

    console.log(id, title, url)
    return (
        <div className='card'>
            <img alt={title} src={url}/>
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;
