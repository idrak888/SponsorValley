import React, { Component } from 'react';
import * as firebase from 'firebase';
import axios from 'axios';
import Page from '../../layouts/main';
import SponsorModule from '../../components/SponsorModule';

class BrowseSponsors extends Component {
    state = {
        sponsors: []
    }
    componentDidMount() {
        axios.get("https://desolate-cove-35133.herokuapp.com/sponsors")
        .then(doc => {
            this.setState({sponsors:doc.data});
            document.querySelector('#sponsorLoader').style.display = 'none';
        });
    }
    render () {
        return (
            <div className="BrowseSponsors">
                <Page>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="search">
                                <h2>Search for sponsors</h2>
                                <input type="text" placeholder="Brand names or sponsor types"/><button className="btn btn-light"><img src="/static/widgets/glass.png" width="20"/></button>
                            </div>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="collapsible-filter">
                                <button className="btn btn-dark" data-toggle="collapse" data-target="#demo">Filter+</button>
                            </div>
                            <div className="filter" id="demo" className="collapse">
                                <h4>Filter</h4>
                                <br/>
                                <p>By target platform</p>
                                <select id="platform">
                                    <option value="youtube">Youtube</option>
                                    <option value="blog">Blog</option>
                                    <option value="streamers">Streamers</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                                <br/>
                                <p>By target category</p> 
                                <select id="category">
                                    <option value="tech">Tech</option>
                                    <option value="humour">Humor</option>
                                    <option value="gaming">Gaming</option>
                                    <option value="finance">Finance</option>
                                    <option value="food">Food</option>
                                    <option value="fashionandlife">Fashion and Lifestyle</option>
                                    <option value="automobiles">Automobiles</option>
                                    <option value="science">Science</option>
                                </select>
                                <br/>
                                <button className="btn btn-primary">GO</button>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="list">
                                <img id="sponsorLoader" width="100" src="https://newvitruvian.com/images/transparent-google-loader-gif-4.gif" />
                                
                                {this.state.sponsors.map(i => {
                                    return <SponsorModule companyName={i.by} min={i.priceRange.minprice} max={i.priceRange.maxprice} description={i.description} date={i.dateCreated}/>;
                                })}
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        );
    }
}

export default BrowseSponsors;