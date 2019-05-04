import React, { Component } from 'react';
import Link from 'next/link';
import Main from '../components/Main';
import Page from '../layouts/main';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

class Homepage extends Component {
    render () {
        return (
            <div className="Homepage">
                <Page>
                    <Main/>
                    <Footer/>
                </Page>
            </div>
        );
    }
}

export default Homepage;