import React from 'react';

const SponsorModule = props => {
    return (
        <div className="SponsorModule">
            <h5>{props.companyName} <img src={props.logo} className="corner" /></h5>
            <p className="secondary-text">{props.description}</p>
            <strong>${props.min}-${props.max}</strong>
            <p className="secondary-text">{props.date}</p>
            
        </div>
    );
}

export default SponsorModule;