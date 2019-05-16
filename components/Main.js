import React, { Component } from 'react';
import SponsorModule from '../components/SponsorModule';
import Widget3 from '../components/Widget3';
import Widget1 from '../components/Widget1';
import Widget4 from '../components/Widget4';
import axios from 'axios';


class Main extends Component {
    state = {
        sponsors: []
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        axios.get("https://desolate-cove-35133.herokuapp.com/sponsors")
        .then(doc => {
            this.setState({sponsors:doc.data});
            document.querySelector('#sponsorLoader').style.display = 'none';
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        var modules = document.querySelectorAll('.SponsorModule');
        if (document.body.scrollTop >  2036 || document.documentElement.scrollTop > 2036) {
            document.querySelectorAll('.Widget3 img')[0].style.opacity = '1';
            document.querySelectorAll('.Widget3 img')[1].style.opacity = '1';
        } else {
            document.querySelectorAll('.Widget3 img')[0].style.opacity = '0';
            document.querySelectorAll('.Widget3 img')[1].style.opacity = '0';
        }
    }
    render () {
        return (
            <div className="HomeMain">
                <div className="Banner">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="slideShow">
                                <div className="slide">
                                    <img src="/static/banner-slideshow/slideshow.gif" className="slide1"/>
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
                            <a href="/seek/signup">I want to promote brands instead</a>
                        </div>
                    </div>
                </div>
                <div className="Main">
                    <Widget1/>
                    <div className="content" id="content">
                        <h3 className="text-primary">What is SponsorValley?</h3>
                        <p className="intro-p text-secondary">
                            The future of sponsorships is here. SponsorValley is a platform designed to connect <strong>brands</strong> with <strong>influencers</strong> making sponsorships easier than ever before!    
                        </p>
                        <br/>
                        <a href="/learnmore"><button className="btn btn-primary">Learn more</button></a>
                    </div>
                    <br/>
                    <br/>
                    <h2 className="text-primary">Open Sponsorships</h2>
                    <div className="widget2Container">
                        <div className="Widget2">
                            <img id="sponsorLoader" width="100" src="https://newvitruvian.com/images/transparent-google-loader-gif-4.gif" />
                            {this.state.sponsors.map(i => {
                                return <SponsorModule companyName={i.by} min={i.priceRange.minprice} max={i.priceRange.maxprice} description={i.description} date={i.dateCreated}/>;
                            })}
                        </div>
                    </div>
                    <a href="/browse"><button className="btn btn-primary">View more</button></a>
                    <br/>
                    <br/>
                    <div className="WhySponsor">
                        <h3 className="text-primary">Why sponsor?</h3>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="https://media.giphy.com/media/hTrarNOfqNDNazpFb0/giphy.gif" width="150"/>
                                <strong>Building a reputation worldwide</strong>
                            </div>
                            <div className="col-sm-4">
                                <img src="https://media.giphy.com/media/Y2nVuhyj1AI3XD8j7o/giphy.gif" width="100"/>
                                <strong>Increased visibility and brand exposure</strong>
                            </div>
                            <div className="col-sm-4 defect">
                                <img src="https://media.giphy.com/media/cNlb1lAkU0SyUliiEN/giphy.gif" width="120"/>
                                <strong>New business partnerships</strong>
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
                    <br/>
                    <hr/>
                    <br/>
                    <Widget4/>
                    <br/>
                </div>
            </div>
        );
    }  
}

export default Main;