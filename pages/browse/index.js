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
        console.log('Mounted');
    }
    render () {
        return (
            <div className="BrowseSponsors">
                <Page>
                    WEE
                </Page>
            </div>
        );
    }
}

export default BrowseSponsors;