import React from 'react';

const Widget3 = props => {
    return (
        <div id="Widget3" className="Widget3">
            <div className="row">
                <div className="col-sm-6">
                    <img src="/static/widgets/computer.png" width="200"/>
                </div>
                <div className="col-sm-6">
                    <h4>Tell your story as a brand</h4>
                    <p>With just a few steps, hire professional content creators to promote your brand and grow your business.</p>
                </div>
            </div>
            <br/>
            or
            <br/>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Become an influencer</h4>
                    <p>Search for the right companies and partnerships to take your sponsorship campaigns to the next level.</p>
                </div>
                <div className="col-sm-6">
                    <img src="/static/widgets/searchsponsors.png" width="200"/>  
                </div>
            </div>
        </div>
    );
}

export default Widget3;