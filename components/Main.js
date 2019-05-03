import React, { Component } from 'react';
import SponsorModule from '../components/SponsorModule';
import Widget3 from '../components/Widget3';
import Widget1 from '../components/Widget1';
import axios from 'axios';


class Main extends Component {
    state = {
        sponsors: []
    }
    componentDidMount() {
        // window.onscroll = function() {scrollFunction()};
        // function scrollFunction() {
        //     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        //         document.querySelector('.Widget2').style.display = 'block';
        //     } else {
        //         document.querySelector('.Widget2').style.display = 'none';
        //     }
        // }
        axios.get("https://desolate-cove-35133.herokuapp.com/sponsors")
        .then(doc => {
            this.setState({sponsors:doc.data});
        });
        this.carousel();
    }
    slideIndex = 0;
    carousel = () => {
        var x = document.querySelectorAll('.slide');
        for (let i=0;i<3;i++) {
            x[i].childNodes[0].style.display = 'none';
        }
        this.slideIndex++;
        if (this.slideIndex > 3) {this.slideIndex = 1};
        x[this.slideIndex-1].childNodes[0].style.display = 'block';
        setTimeout(this.carousel, 1000);
    }
    render () {
        return (
            <div className="HomeMain">
                <div className="Banner">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="/static/logo.png" className="logo" />
                            <div className="slideShow">
                                <div className="slide">
                                    <img src="static/banner-slideshow/slide1.png" className="slide1"/>
                                </div>
                                <div className="slide">
                                    <img src="static/banner-slideshow/slide2.png" className="slide2"/>
                                </div>
                                <div className="slide">
                                    <img src="static/banner-slideshow/slide3.png" className="slide3"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col2">
                            <h2>Sponsorships made easier.</h2>
                            <p>Looking to find a sponsor to partner with?
                            we've got you covered. Be a sponsor and let experts promote your business with <strong>sponsorvalley</strong></p>
                            <a href="/sponsor/signup"><button className="btn btn-green">Get started</button></a>
                            <br/>
                            <br/>
                            <a href="/seeker/signup">I want to promote brands instead</a>
                        </div>
                    </div>
                </div>
                <div className="Main">
                    <Widget1/>
                    <div className="content" id="content">
                        <h3 className="text-primary">What is SponsorValley?</h3>
                        <p className="intro-p text-secondary">
                            SponsorValley is a platform built to connect <strong>sponsors</strong> such as corporate companies
                            with <strong>sponsor seekers</strong> who could be Youtubers, Bloggers, Events, or Individuals looking for partnerships.
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2 className="text-primary">Open Sponsorships</h2>
                    <div className="Widget2">
                        {this.state.sponsors.map(i => {
                            return <SponsorModule companyName={i.by} min={i.priceRange.minprice} max={i.priceRange.maxprice} description={i.description} date={i.dateCreated}/>;
                        })}
                    </div>
                    <button className="btn btn-primary">View more</button>
                    <br/>
                    <br/>
                    <div className="WhySponsor">
                        <h3 className="text-primary">Why sponsor?</h3>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4">
                            {/* <div className="reasons">
                                    <h4>Building a reputation</h4>
                                    <p>Sponsoring an event is a good way to demonstrate an expertise in a certain field and build a brand reputation.</p>
                            </div> */}
                                <img src="https://media.giphy.com/media/hTrarNOfqNDNazpFb0/giphy.gif" width="150"/>
                                <h4>Building a reputation worldwide</h4>
                            </div>
                            <div className="col-sm-4">
                                {/* <div className="reasons">
                                    <h4>Increased visibility</h4>
                                    <p>Event sponsorship enables businesses and organisations to receive more media coverage and support from experts.</p>
                                </div>   */}
                                <img src="https://media.giphy.com/media/Y2nVuhyj1AI3XD8j7o/giphy.gif" width="100"/>
                                <h4>Increased visibility and brand exposure</h4>
                            </div>
                            <div className="col-sm-4 defect">
                                {/* <div className="reasons">
                                    <h4>New business partnerships</h4>
                                    <p>Events are not only great for generating leads but also for finding new partners and meeting like-minded professionals.</p>
                                </div> */}
                                <img src="https://media.giphy.com/media/cNlb1lAkU0SyUliiEN/giphy.gif" width="120"/>
                                <h4>New business partnerships</h4>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <Widget3/>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="GetStarted">
                        <h3>Join us now (its free!)</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <strong>Get started as a...</strong>
                                <br/>
                                <a href="/sponsor/signup"><button className="btn btn-success">Sponsor</button></a>
                                <br/>  
                                <p>Suitable for: </p>
                                <ul>
                                    <li>Corporate companies</li> 
                                    <li>Small startups</li>
                                    <li>Brand promoters</li>
                                    <li>etc.</li>
                                </ul>
                            </div>
                            
                            <div className="col-sm-6">
                                <strong>Get started as a...</strong>
                                <br/>
                                <a href="/seek/signup"><button onClick={this.toSignUp} className="btn btn-success">Sponsor seeker</button></a>
                                <br/>
                                <p>Suitable for: </p>
                                <ul>
                                    <li>Youtubers</li> 
                                    <li>Bloggers</li>
                                    <li>Event managers</li>
                                    <li>etc.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

export default Main;