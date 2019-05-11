import React, { Component } from 'react';
import Page from '../../layouts/main';

class Learnmore extends Component {
    componentDidMount() {
        document.getElementById('video1').play();
    }
    render(){
        return (
            <div className="Learnmore">
                <Page>
                    <br/>
                    <br/>
                    <h2 className="text-primary">What is sponsorvalley?</h2>
                    
                    <br/>
                    
                    <video id="video1" width="420" autoplay>
                        <source src="/static/learnmore.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>

                    <br/>
                    <br/>
                    
                    <p className="intro-p text-secondary">
                        The future of sponsorships is here. </p>
                    <p className="text-secondary">
                        SponsorValley is a platform designed to connect <strong>brands</strong> with <strong>influencers</strong> making sponsorships easier than ever before!    
                    
                    </p>
                </Page>
            </div>
        )
    }
}

export default Learnmore;