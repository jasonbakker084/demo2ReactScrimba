
import React from 'react';

function spotifyCover(props) {
    return (
        <div className="Card-body">
            <img className="Album-Cover" src={props.cover.imgUrl} alt="cover" />
            <h3 className="Album-Title">{props.cover.album}</h3>
            <h3 className="Artist-Text">{props.cover.artist}</h3>
            <h4 className="Additional-Text">{props.cover.text}</h4>
        </div>
    )
}

export default spotifyCover;