import React from 'react';

function Contactcard(props) {
    return (
        <div className="contact-card">
            <img className="contactImg" src={props.contact.imgUrl} alt="contact" />
            <h3>{props.contact.name}</h3>
            <p>Phone:{props.contact.phone} </p>
            <p>Email: {props.contact.email} </p>
        </div>
    )
}

export default Contactcard;