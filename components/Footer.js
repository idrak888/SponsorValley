import React from 'react';

const Footer = props => {
    return (
        <div className="Footer">
            <div className="Contact">
                <h3>Contact us <img src="/static/FooterImages/footer.png"/></h3>
                <br/>
                <input type="text" placeholder="Your name" />
                <br/>
                <input type="text" name="email" placeholder="Your email"/>
                <br/>
                <textarea cols="20" rows="8" placeholder="Anything you want to know"></textarea>
                <br/>
                <button className="btn btn-light">Submit</button>
            </div>
            <div className="Bottom">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="/static/FooterImages/fb.png"/><img src="/static/FooterImages/in.png"/><img src="/static/FooterImages/pin.png"/>
                        <br/>
                        <input type="text" placeholder="Search"/><button className="btn btn-success">Search</button>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Sponsor valley is officially licensed and globally used. 
                            We are primarily tech based and we take our connections
                            and responsibilities sincerely. Please read our privacy policy for more info.
                        </p>
                        <span>sponsorvalley.com ©2019</span> | <a href="/">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;