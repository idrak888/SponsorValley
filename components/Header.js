import React, { Component } from 'react';
import * as firebase from 'firebase';
import Signin from './Signin';

class Header extends Component {
    state = {
        dashLink: '',
        name: ''
    }
    componentDidMount () {
        const signin = document.querySelector('.signin');
        const signout = document.querySelector('.signout');
        const btnSuccess = document.querySelector('.btn-outline-success');

        if (localStorage.getItem('user') == '') {
            this.setState({dashLink:'/dashboard/', name: ''});
            signout.style.display = 'none';
            signin.style.display = 'inline-block';
            btnSuccess.style.display = 'inline-block';
        }else {
            const compName = JSON.parse(localStorage.getItem('user')).companyName;
            const name = JSON.parse(localStorage.getItem('user')).name;

            if (compName == undefined) {
                this.setState({dashLink:'/dashboard/' + localStorage.getItem('userId'), name});
            }else {
                this.setState({dashLink:'/dashboard/' + localStorage.getItem('userId'), name: compName});
            }
            signout.style.display = 'inline-block';
            signin.style.display = 'none';
            btnSuccess.style.display = 'none';
        }
    }
    close = () => {
        document.querySelector('.Signin').style.display = 'none';
    }
    signOut = () => {
        firebase.auth().signOut().then(() => {
            window.location.reload();
        }, function(error) {
            // An error happened.
        });
    }
    signIn = () => {
        document.querySelector('.Signin').style.display = 'block';
    }
    render () {
        return (
            <div className="Header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="navbar-header navbar-left pull-left">
                        <ul class="nav pull-right"> 
                            <button class="navbar-toggler pull-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand" href="/" ><img src="/static/sv2.png" width="170"/></a>
                        </ul>
                    </div>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        
                            <li class="nav-item active">
                                <a class="nav-link" href="/browse">Browse Sponsors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/dashboard">Dashboard <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/learnmore">How it works</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Get started
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a href="/seek/signup" class="dropdown-item">Find a sponsor</a>
                                <a href="/sponsor/signup" class="dropdown-item">Be a sponsor</a>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0 pull-right">
                            <a href="/seek/signup"><button class="btn btn-outline-success my-2 my-sm-0">For sponsor seekers</button></a>
                        </form>
                    </div>
                    <div class="navbar-header navbar-right pull-right">
                        <ul class="nav pull-right">
                            <li class="navbar-text pull-right signin"><span className="link" onClick={this.signIn}>Sign in</span></li> 
                        </ul>
                        <ul class="nav pull-right">
                            <li class="navbar-text pull-right signout"><span className="link" href="#" onClick={this.signOut}>Sign out</span> Signed in as {this.state.name}</li> 
                        </ul>
                    </div>
                </nav>
                <Signin close={this.close}/>
            </div>
        );
    }
}   

export default Header;